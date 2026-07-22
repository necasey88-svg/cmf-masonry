import { NextRequest, NextResponse } from "next/server";

// Proxies the estimate form to Web3Forms server-side so the access key never
// ships to the browser. Requires WEB3FORMS_ACCESS_KEY to be set (see
// .env.example) — create a new key for cmfmasonry.com, don't reuse calmantel's.
export async function POST(request: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Estimate form is not configured yet (missing WEB3FORMS_ACCESS_KEY)." },
      { status: 503 }
    );
  }

  try {
    const incoming = await request.formData();
    const outgoing = new FormData();
    outgoing.append("access_key", accessKey);
    outgoing.append("subject", "New Estimate Request — CMF Masonry");
    for (const [key, value] of incoming.entries()) {
      outgoing.append(key, value);
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: outgoing,
    });
    const rawText = await res.text();

    let data: unknown;
    try {
      data = JSON.parse(rawText);
    } catch {
      console.error("Web3Forms returned a non-JSON response", { status: res.status, rawText });
      return NextResponse.json(
        { success: false, message: "The estimate service returned an unexpected response. Please call us instead." },
        { status: 502 }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Estimate form submission failed", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong sending your estimate request. Please call us instead." },
      { status: 500 }
    );
  }
}
