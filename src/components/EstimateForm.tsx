"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { BUSINESS } from "@/lib/business-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function EstimateForm({ defaultProjectType = "" }: { defaultProjectType?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    formData.append("subject", "New Estimate Request — CMF Masonry");
    if (typeof window !== "undefined") {
      formData.append("referring_page", window.location.pathname);
    }

    try {
      // Submitted directly to Web3Forms from the browser (their access keys are
      // designed to be public-facing) — a server-side proxy from Vercel's
      // datacenter IPs got blocked/challenged and returned non-JSON responses.
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        trackEvent("estimate_form_submit", {
          project_type: formData.get("project_type") || "unspecified",
        });
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[color:var(--color-paper-dim)] border border-[color:var(--color-line)] p-8 text-center">
        <h3 className="text-lg font-medium text-[color:var(--color-ink)] mb-2">Request received</h3>
        <p className="text-[color:var(--color-ink-soft)] text-sm">
          Thanks — our team will follow up shortly. If your project is time-sensitive, call us at{" "}
          <a href={BUSINESS.phoneHref} className="text-[color:var(--color-brick)] hover:underline">
            {BUSINESS.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl" encType="multipart/form-data">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[color:var(--color-ink)] mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full border border-[color:var(--color-line)] px-3.5 py-2.5 text-sm bg-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[color:var(--color-ink)] mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-[color:var(--color-line)] px-3.5 py-2.5 text-sm bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[color:var(--color-ink)] mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-[color:var(--color-line)] px-3.5 py-2.5 text-sm bg-white"
        />
      </div>

      <div>
        <label htmlFor="project_type" className="block text-sm font-medium text-[color:var(--color-ink)] mb-1.5">
          Project type
        </label>
        <select
          id="project_type"
          name="project_type"
          defaultValue={defaultProjectType}
          className="w-full border border-[color:var(--color-line)] px-3.5 py-2.5 text-sm bg-white"
        >
          <option value="">Select one</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[color:var(--color-ink)] mb-1.5">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project — location, scope, materials you're considering, timeline."
          className="w-full border border-[color:var(--color-line)] px-3.5 py-2.5 text-sm bg-white"
        />
      </div>

      <div>
        <label htmlFor="photos" className="block text-sm font-medium text-[color:var(--color-ink)] mb-1.5">
          Photos (optional, up to 5)
        </label>
        <input
          id="photos"
          name="attachment"
          type="file"
          accept="image/*"
          multiple
          className="w-full border border-[color:var(--color-line)] px-3.5 py-2.5 text-sm bg-white file:mr-4 file:border-0 file:bg-[color:var(--color-paper-dim)] file:px-3 file:py-1.5"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-[color:var(--color-brick-dark)]">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] disabled:opacity-60 text-white px-8 py-3.5 font-medium transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send Estimate Request"}
      </button>
    </form>
  );
}
