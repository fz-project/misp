"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CalendarDays, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
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

  // Variants motion reusable
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="news" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Berita & <span className="text-red-600">Update</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dari PT. MISP — proyek, pencapaian, dan inovasi dalam industri telekomunikasi.
          </p>
        </motion.div>

        {/* Featured News */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Gambar dengan animasi fadeRight */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <motion.img
              src={newsData[0].image}
              alt={newsData[0].title}
              className="w-full h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </motion.div>

          {/* Text dengan animasi fadeLeft */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
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

              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href={`/news/${newsData[0].id}`}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Baca Selengkapnya
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Other News Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {newsData.slice(1).map((news) => (
            <motion.div key={news.id} variants={fadeUp}>
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.08 }}
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

                    <motion.div whileHover={{ x: 3 }}>
                      <Link
                        href={`/news/${news.id}`}
                        className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300 flex items-center"
                      >
                        Baca
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/news"
              className="inline-flex items-center bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-200 hover:border-red-200"
            >
              Lihat Semua Berita
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
