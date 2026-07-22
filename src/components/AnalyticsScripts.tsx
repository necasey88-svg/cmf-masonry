import Script from "next/script";

// Reads from env so the placeholder IDs never leak into a real deploy by
// accident — until NEXT_PUBLIC_GA4_ID / NEXT_PUBLIC_CALLRAIL_COMPANY_ID are
// set (see .env.example), these scripts simply don't render.
export default function AnalyticsScripts() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const callrailId = process.env.NEXT_PUBLIC_CALLRAIL_COMPANY_ID;

  return (
    <>
      {ga4Id && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}
          </Script>
        </>
      )}
      {callrailId && (
        <Script
          src={`//cdn.callrail.com/companies/${callrailId}/12/swap.js`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
