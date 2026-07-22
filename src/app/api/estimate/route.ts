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
  const data = await res.json();

  return NextResponse.json(data, { status: res.status });
}
