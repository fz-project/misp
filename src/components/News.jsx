"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CalendarDays, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { newsData } from "../data/news";

const News = () => {
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
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Berita & <span className="text-red-600">Update</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dari PT. MISP - proyek, pencapaian, dan
            inovasi dalam industri telekomunikasi
          </p>
        </div>

        {/* Featured News - Latest/First News */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src={newsData[0].image}
                alt={newsData[0].title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                    newsData[0].category
                  )}`}
                >
                  <Tag size={14} className="inline mr-1" />
                  {newsData[0].category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <CalendarDays size={16} className="mr-2" />
                  {formatDate(newsData[0].date)}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {newsData[0].title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                {newsData[0].excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <User size={16} className="mr-2" />
                  {newsData[0].author}
                </div>

                <Link
                  href={`/news/${newsData[0].id}`}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Baca Selengkapnya
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.slice(1).map((news) => (
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
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                  {news.title}
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

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-red-200"
          >
            Lihat Semua Berita
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
