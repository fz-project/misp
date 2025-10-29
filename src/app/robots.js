export default function robots() {
  const base = "https://misp.co.id";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api/private"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
