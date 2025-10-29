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
  description: "Company Profile of Mikro Indo Sinergi Persada",
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
    "telecommunication engineering",
    "FTTH",
    "network rollout",
    "scrap management",
    "warehousing",
    "Indonesia",
  ],
  authors: [{ name: "MISP" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MISP",
    title: "Mikro Indo Sinergi Persada",
    description: "Telecommunication Engineering & Industrial Solutions.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MISP – Telecommunication Engineering",
    description:
      "Engineering telekomunikasi & warehousing di Indonesia.",
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
