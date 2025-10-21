"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  User,
  ArrowRight,
  ArrowLeft,
  Search,
} from "lucide-react";
import { newsData } from "@/data/news";

const AllNews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(newsData.map((news) => news.category))];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Project Update": "bg-blue-100 text-blue-700",
      "Company News": "bg-green-100 text-green-700",
      Certification: "bg-purple-100 text-purple-700",
      Partnership: "bg-orange-100 text-orange-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-40">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          {/* <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Home
            </Link>
          </div> */}

          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Semua <span className="text-red-600">Berita</span>
            </h1>
            <p className="text-lg text-gray-600">
              Ikuti semua perkembangan informasi terbaru PT. Mikro Indo Sinergi Persada
            </p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Cari berita..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <main className="container mx-auto px-4 py-12">
        {filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tidak ada berita ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah kata kunci pencarian atau kategori
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Menampilkan {filteredNews.length} dari {newsData.length} berita
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <Card
                  key={news.id}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          news.category
                        )}`}
                      >
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <CalendarDays size={14} className="mr-2" />
                      {formatDate(news.date)}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300">
                      <Link href={`/news/${news.id}`} className="line-clamp-2">
                        {news.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-xs">
                        <User size={14} className="mr-1" />
                        <span className="truncate">{news.author}</span>
                      </div>

                      <Link
                        href={`/news/${news.id}`}
                        className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300 flex items-center"
                      >
                        Baca
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AllNews;
