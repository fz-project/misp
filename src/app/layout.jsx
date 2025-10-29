import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  display: "swap",
  preload: true,
});

const siteUrl = "https://misp.co.id";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikro Indo Sinergi Persada",
    template: "%s | MISP",
  },
  description:
    "PT Mikro Indo Sinergi Persada (MISP) adalah perusahaan engineering telekomunikasi yang menyediakan layanan network rollout, FTTH, scrap management, dan warehousing di seluruh Indonesia.",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  applicationName: "MISP",
  generator: "Next.js 15",
  keywords: [
    // --- Brand & General ---
    "MISP", "Mikro Indo Sinergi Persada", "PT Mikro Indo Sinergi Persada",
    "engineering telekomunikasi", "telecommunication engineering",
    "layanan telekomunikasi", "telecom services", "telecom company Indonesia",
    "solusi telekomunikasi", "telecommunication solutions",

    // --- Services ---
    "rollout jaringan", "network rollout", "FTTH", "fiber to the home",
    "survey jaringan", "network survey and planning", "optimasi jaringan",
    "network optimization", "instalasi microwave link", "microwave link installation",
    "relokasi RAN", "RAN relocation", "dismantle jaringan", "dismantle outdoorisation",
    "upgrade kapasitas jaringan", "capacity upgrade", "turnkey telecom projects",

    // --- Warehousing & Scrap ---
    "warehousing telekomunikasi", "telecom warehousing", "logistik telekomunikasi",
    "telecom logistics", "pergudangan industri", "industrial warehousing",
    "scrap management", "manajemen scrap peralatan", "equipment scrap management",

    // --- Locations ---
    "warehouse Surabaya", "warehouse Jakarta", "warehouse Bandung",
    "warehouse Semarang", "warehouse Bali", "warehouse Mataram",
    "telecom warehouse Indonesia", "lokasi pergudangan telekomunikasi",

    // --- Values / Certification ---
    "ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001",
    "solusi end-to-end telekomunikasi", "telecommunication project management",
    "engineering projects Indonesia", "layanan nasional telekomunikasi",

    // --- Long-tail (bantu SEO alami) ---
    "layanan rollout jaringan telekomunikasi Indonesia",
    "solusi warehouse telekomunikasi Surabaya",
    "dismantle outdoorisation tower telekomunikasi",
    "manajemen scrap peralatan telekomunikasi operator",
    "engineering jaringan microwave new link Indonesia",
    "fiber optic network Indonesia",
    "telecommunication engineering company in Indonesia"
  ],
  authors: [{ name: "MISP" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MISP",
    title: "Mikro Indo Sinergi Persada",
    description:
      "Telecommunication Engineering & Industrial Solutions — network rollout, FTTH, warehousing, and scrap management across Indonesia.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MISP – Telecommunication Engineering",
    description:
      "Engineering telekomunikasi, FTTH, warehousing, dan scrap management di Indonesia.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN,
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
