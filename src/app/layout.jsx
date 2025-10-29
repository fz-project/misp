// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
  preload: true,
});

const siteUrl = "https://mikroindosinergipersada.com";
const ogImage = `${siteUrl}/logo/logo-misp.png`; // 1200x630+, public/logo/og.jpg
const logo = `${siteUrl}/logo/apple-touch-icon.png`;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikro Indo Sinergi Persada (MISP) – Telecommunication Engineering Indonesia",
    template: "%s | MISP",
  },

  description:
    "PT Mikro Indo Sinergi Persada (MISP) adalah perusahaan telecommunication engineering di Indonesia yang berfokus pada layanan network rollout, FTTH, microwave link, warehousing, dan scrap management dengan standar nasional dan sertifikasi ISO.",

  alternates: { canonical: "/" },

  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/logo/apple-touch-icon.png", color: "#0f172a" },
      { rel: "shortcut icon", url: "/logo/favicon.ico", type: "image/x-icon" },
    ],
  },
  manifest: "/logo/site.webmanifest",

  applicationName: "MISP",
  generator: "Next.js 15",
  keywords: [
    "MISP", "PT Mikro Indo Sinergi Persada", "Mikro Indo Sinergi Persada",
    "telecommunication engineering Indonesia", "engineering telekomunikasi nasional",
    "network rollout Indonesia", "FTTH Indonesia", "microwave link installation",
    "warehousing telekomunikasi", "scrap management Indonesia",
    "telecommunication solutions", "telecom project management",
    "telecom engineering company Indonesia",
    "MISP","Mikro Indo Sinergi Persada","PT Mikro Indo Sinergi Persada",
    "engineering telekomunikasi","telecommunication engineering",
    "layanan telekomunikasi","telecom services","telecom company Indonesia",
    "solusi telekomunikasi","telecommunication solutions",
    "rollout jaringan","network rollout","FTTH","fiber to the home",
    "survey jaringan","network survey and planning","optimasi jaringan",
    "network optimization","instalasi microwave link","microwave link installation",
    "relokasi RAN","RAN relocation","dismantle jaringan","dismantle outdoorisation",
    "upgrade kapasitas jaringan","capacity upgrade","turnkey telecom projects",
    "warehousing telekomunikasi","telecom warehousing","logistik telekomunikasi",
    "telecom logistics","pergudangan industri","industrial warehousing",
    "scrap management","manajemen scrap peralatan","equipment scrap management",
    "warehouse Surabaya","warehouse Jakarta","warehouse Bandung",
    "warehouse Semarang","warehouse Bali","warehouse Mataram",
    "telecom warehouse Indonesia","lokasi pergudangan telekomunikasi",
    "ISO 9001","ISO 14001","ISO 45001","ISO 37001",
    "solusi end-to-end telekomunikasi","telecommunication project management",
    "engineering projects Indonesia","layanan nasional telekomunikasi",
    "layanan rollout jaringan telekomunikasi Indonesia",
    "solusi warehouse telekomunikasi Surabaya",
    "dismantle outdoorisation tower telekomunikasi",
    "manajemen scrap peralatan telekomunikasi operator",
    "engineering jaringan microwave new link Indonesia",
    "fiber optic network Indonesia",
    "telecommunication engineering company in Indonesia"
  ],

  authors: [{ name: "Arunika Dev x PT Mikro Indo Sinergi Persada" }],

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MISP",
    title: "Mikro Indo Sinergi Persada (MISP)",
    description:
      "MISP menyediakan solusi telecommunication engineering di Indonesia: survey, network rollout, FTTH, microwave link, warehousing, dan scrap management dengan kualitas ISO.",
    locale: "id_ID",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "PT Mikro Indo Sinergi Persada – MISP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MISP – Telecommunication Engineering Indonesia",
    description:
      "PT Mikro Indo Sinergi Persada (MISP) menghadirkan layanan telecommunication engineering, FTTH, microwave link, warehousing, dan scrap management di seluruh Indonesia.",
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },

  verification: { google: process.env.NEXT_PUBLIC_GSC_TOKEN },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* JSON-LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mikro Indo Sinergi Persada (MISP)",
              url: siteUrl,
              logo: logo,
              image: ogImage,
              description:
                "PT Mikro Indo Sinergi Persada (MISP) adalah perusahaan telecommunication engineering yang berfokus pada network rollout, FTTH, microwave link, warehousing, dan scrap management di Indonesia.",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
