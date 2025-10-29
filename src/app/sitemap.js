const base = "https://misp.co.id";

const staticRoutes = ["", "about", "services", "locations"].map(
  (p) => `/${p}`.replace("//", "/")
);

export default function sitemap() {
  const now = new Date();
  return staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
