"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

/**
 * Modal detail item service (dengan daftar project di kanan)
 * Responsif & daftar project memiliki scroll sendiri dengan max height
 * @param {Object} props
 * @param {{ title: string, description?: string } | null} props.parentService
 * @param {{ title: string, description: string, images?: string[] } | null} props.service
 * @param {{ title: string }[]} [props.relatedProjects]
 * @param {() => void} props.onClose
 * @param {(index: number) => void} [props.onSelectProject]
 */
export default function ServiceModal({
  parentService,
  service,
  relatedProjects = [],
  onClose,
  onSelectProject,
}) {
  const [activeImage, setActiveImage] = useState(0);

  const fallbackImage =
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=500&fit=crop&auto=format&q=80";

  if (!service) return null;

  const images =
    service.images && service.images.length > 0
      ? service.images
      : [fallbackImage];

  const nextImage = () =>
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full border-t-4 border-red-600 animate-in fade-in duration-200 my-8 overflow-hidden">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-600 transition cursor-pointer"
        >
          <X size={28} />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-3 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {parentService?.title || "Service Detail"}
          </h2>
          {parentService?.description && (
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              {parentService.description}
            </p>
          )}
        </div>

        {/* Konten utama */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Kolom kiri: gambar + navigasi */}
          <div className="relative">
            {images.length > 0 ? (
              <Image
                src={images[activeImage] || fallbackImage}
                alt={service.title || "No image"}
                width={800}
                height={600}
                className="rounded-xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] border border-gray-200"
              />
            ) : (
              <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl text-gray-500 bg-gray-50">
                <ImageOff size={40} className="mb-2 opacity-60" />
                <p className="text-sm">No image available</p>
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-red-600 hover:text-white transition cursor-pointer"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-red-600 hover:text-white transition cursor-pointer"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          {/* Kolom kanan: deskripsi + daftar project */}
          <div className="flex flex-col max-h-[70vh] pr-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title || "Untitled Project"}
            </h3>
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              {service.description || "No description provided."}
            </p>

            {/* Daftar project */}
            <div className="max-h-[30vh] md:max-h-[40vh] overflow-y-auto">
               {relatedProjects.length > 0 && (
              <div className="mt-4 space-y-2">
                {relatedProjects.map((p, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveImage(0);
                      onSelectProject?.(index);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition font-medium cursor-pointer ${
                      p.title === service.title
                        ? "bg-red-600 text-white shadow"
                        : "hover:bg-red-50 text-gray-800"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            )}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
