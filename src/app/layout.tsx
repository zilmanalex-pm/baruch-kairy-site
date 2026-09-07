import type { Metadata } from "next"
import Script from "next/script"
import { heebo, frankRuhlLibre } from "@/lib/fonts"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

/**
 * Google Analytics measurement ID.
 * Replace with the real G-XXXXXXX value from your GA4 property,
 * or set via the NEXT_PUBLIC_GA_ID environment variable on Vercel.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""

export const metadata: Metadata = {
  title: {
    default: "ברוך קאירי פסיכולוג תעסוקתי | ייעוץ קריירה ומיון",
    template: "%s | ברוך קאירי",
  },
  description:
    "ברוך קאירי, פסיכולוג תעסוקתי מומחה עם 30 שנות ניסיון. ייעוץ קריירה וליווי בצמתים תעסוקתיים לפרט, מיון והערכה ובניית תהליכים לארגונים.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "ברוך קאירי פסיכולוג תעסוקתי",
    images: [
      {
        url: "https://baruchkairy.co.il/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ברוך קאירי פסיכולוג תעסוקתי מומחה",
      },
    ],
  },
}

/** JSON-LD structured data LocalBusiness + Person (Sprint 5) */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://baruchkairy.co.il/#person",
      name: "ברוך קאירי",
      jobTitle: "פסיכולוג תעסוקתי מומחה-מדריך",
      description:
        "פסיכולוג תעסוקתי מומחה-מדריך עם 30 שנות ניסיון. ייעוץ קריירה לפרט ובניית תהליכי מיון והערכה לארגונים.",
      telephone: "+972-52-515-1351",
      email: "kairybaruch@gmail.com",
      url: "https://baruchkairy.co.il",
      image: "https://baruchkairy.co.il/images/baruch-portrait3.png",
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "אוניברסיטת בן גוריון",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "האוניברסיטה העברית בירושלים",
        },
      ],
      knowsLanguage: "he",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://baruchkairy.co.il/#business",
      name: "ברוך קאירי ייעוץ תעסוקתי",
      description:
        "ייעוץ קריירה, ליווי בצמתים תעסוקתיים, ובניית תהליכי מיון והערכה לארגונים.",
      telephone: "+972-52-515-1351",
      email: "kairybaruch@gmail.com",
      url: "https://baruchkairy.co.il",
      image: "https://baruchkairy.co.il/images/baruch-portrait3.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "תל אביב",
        addressCountry: "IL",
      },
      founder: { "@id": "https://baruchkairy.co.il/#person" },
      priceRange: "$$",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${frankRuhlLibre.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-dvh flex flex-col bg-bg text-text font-body overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">
          דלג לתוכן הראשי
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
