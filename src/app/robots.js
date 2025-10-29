// app/robots.js
export default function robots() {
  const base = "https://mikroindosinergipersada.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api/private"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base, // opsional; beberapa crawler non-Google menggunakannya
  };
}
