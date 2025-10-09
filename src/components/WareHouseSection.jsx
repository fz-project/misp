"use client";

import React, { useId, useEffect, useState, useCallback } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Building, MapPin, User, Phone, Ruler, ChevronRight, ChevronLeft, X } from "lucide-react";
import { warehouseInfo } from "@/data/warehouse";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

export default function WarehouseSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {warehouseInfo.locations.map((location, index) => (
        <WarehouseCard key={index} location={location} delayIndex={index} />
      ))}
    </div>
  );
}

const WarehouseCard = React.memo(function WarehouseCard({
  location,
  delayIndex,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const area =
    location.length && location.width
      ? location.length * location.width
      : null;

  return (
    <Card
      className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4 gap-2">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
              <Building
                className="text-red-600 group-hover:text-white transition-colors duration-300"
                size={24}
              />
            </div>
            <h1>{location.city}</h1>
          </CardTitle>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              location.type.includes("Head")
                ? "bg-red-100 text-red-700"
                : location.type.includes("Branch")
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {location.type}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {location.images?.length > 0 && (
          <AutoScrollCarousel
            key={useId()}
            images={location.images}
            delayIndex={delayIndex}
            paused={isHovered}
          />
        )}

        {/* Alamat */}
        <div className="flex items-start space-x-3">
          <MapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
          <p className="text-gray-600 text-sm leading-relaxed">
            {location.address}
          </p>
        </div>

        {/* Dimensi */}
        {(location.length || location.width) && (
          <div className="flex items-start space-x-3">
            <Ruler className="text-red-600 mt-1 flex-shrink-0" size={18} />
            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                <span className="font-medium">Length:</span>{" "}
                {location.length ? `${location.length} m` : "-"}
              </p>
              <p>
                <span className="font-medium">Width:</span>{" "}
                {location.width ? `${location.width} m` : "-"}
              </p>
              {area && (
                <p>
                  <span className="font-medium">Area:</span> {area} m²
                </p>
              )}
            </div>
          </div>
        )}

        {/* Kontak */}
        {location.contactPerson && (
          <div className="flex items-center space-x-3">
            <User className="text-red-600 flex-shrink-0" size={18} />
            <span className="text-gray-700 font-medium">
              {location.contactPerson}
            </span>
          </div>
        )}

        {/* Telepon */}
        {location.phone && (
          <div className="flex items-center space-x-3">
            <Phone className="text-red-600 flex-shrink-0" size={18} />
            <a
              href={`tel:${location.phone}`}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              {location.phone}
            </a>
          </div>
        )}

        {location.mapsUrl && (
          <Link
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2 text-sm"
          >
            <MapPin />
            <span>Show in Maps</span>
          </Link>
        )}
      </CardContent>
    </Card>
  );
});

/* 🎞️ Carousel + Lightbox */
const AutoScrollCarousel = React.memo(function AutoScrollCarousel({
  images,
  delayIndex,
  paused,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const initialDelay = 2000 * delayIndex;
    let intervalId;
    const startCarousel = () => {
      intervalId = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setFade(true);
        }, 400);
      }, 5000);
    };
    const startTimer = setTimeout(startCarousel, initialDelay);
    return () => {
      clearTimeout(startTimer);
      clearInterval(intervalId);
    };
  }, [images.length, delayIndex, paused]);

  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 400);
  };

  const goNext = () => goToSlide((currentIndex + 1) % images.length);
  const goPrev = () =>
    goToSlide((currentIndex - 1 + images.length) % images.length);

  return (
    <>
      {/* 🖼️ Carousel di dalam card */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="w-full aspect-video relative">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Warehouse image ${index + 1}`}
              className={`absolute inset-0 object-cover w-full h-full transition-all duration-700 ease-in-out transform cursor-pointer ${
                index === currentIndex && fade
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
              width={640}
              height={640}
              priority
              onClick={() => setLightboxOpen(true)} // 🟢 Klik buka lightbox
            />
          ))}
        </div>

        {/* Tombol navigasi di card */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all z-20 cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all z-20 cursor-pointer"
            >
              ›
            </button>
          </>
        )}

        {/* Dot navigasi */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-red-600 scale-110"
                    : "bg-gray-300 hover:bg-red-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 🪟 Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          startIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
});


const ImageLightbox = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, onClose]);

  return createPortal(
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999]">
      {/* Tombol Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
      >
        <X size={28} strokeWidth={2.5} />
      </button>

      {/* Tombol Sebelumnya */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-6 w-12 h-12 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft size={38} strokeWidth={2.5} />
      </button>

      {/* Gambar */}
      <Image
        src={images[index]}
        alt={`Image ${index + 1}`}
        width={1920}
        height={1080}
        className="w-[90vw] max-h-[90vh] object-contain rounded-lg transition-all duration-500"
      />

      {/* Tombol Berikutnya */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-6 w-12 h-12 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight size={38} strokeWidth={2.5} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>,
    document.body
  );
};


