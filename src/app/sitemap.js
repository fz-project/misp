// app/sitemap.js
const BASE = "https://mikroindosinergipersada.com";

// Rute statis saat ini (tanpa hash). Tinggal tambah string baru jika ada halaman baru.
const staticRoutes = [
  "/",            // landing page utama
  // "/about",
  // "/services",
  // "/warehouse",
  // "/locations",
  // "/contact",
];

// Jika nanti punya halaman dinamis (blog/portofolio/produk), jadikan fungsi async
// dan fetch daftar slug di sini, lalu map ke { url, lastModified }.

export default function sitemap() {
  const lastmod = new Date().toISOString(); // ISO 8601 disarankan
  return staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: lastmod,
    // Boleh dihapus; Google cenderung mengabaikan field ini:
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
