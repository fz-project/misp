"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CalendarDays, User, Tag, Share2 } from "lucide-react";
import { newsData } from "@/data/news";
import { Button } from "@/components/ui/button";

const NewsDetail = () => {
  const params = useParams();
  const id = params.id;
  const news = newsData.find((item) => item.id === parseInt(id));

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Berita Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Berita yang Anda cari tidak tersedia.
          </p>
          <Link
            href="/"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-24 pt-4">
      {/* Header Navigation */}
      {/* <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>

            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Share2 size={16} />
              <span>Bagikan</span>
            </Button>
          </div>
        </div>
      </header> */}

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(
                  news.category
                )}`}
              >
                <Tag size={14} className="inline mr-1" />
                {news.category}
              </span>
              <div className="flex items-center text-gray-500">
                <CalendarDays size={16} className="mr-2" />
                {formatDate(news.date)}
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {news.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-8">
              <User size={18} className="mr-2" />
              <span>Oleh {news.author}</span>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              {news.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: news.content }}
              className="text-gray-700 leading-relaxed space-y-6"
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Bagikan artikel ini:</span>
                <Button
                  onClick={handleShare}
                  size="sm"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Share2 size={16} className="mr-2" />
                  Bagikan
                </Button>
              </div>

              <div className="text-sm text-gray-500">
                Dipublikasikan pada {formatDate(news.date)}
              </div>
            </div>
          </footer>
        </article>

        {/* Related News */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Berita Terkait
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {newsData
              .filter((item) => item.id !== news.id)
              .slice(0, 3)
              .map((relatedNews) => (
                <Link
                  key={relatedNews.id}
                  href={`/news/${relatedNews.id}`}
                  className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={relatedNews.image}
                    alt={relatedNews.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <CalendarDays size={14} className="mr-2" />
                      {formatDate(relatedNews.date)}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                      {relatedNews.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {relatedNews.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsDetail;
