"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { fleetData, fleetStats } from "../data/fleet";
import { motion } from "framer-motion";

const Fleet = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const allVehicles = fleetData.flatMap((c) => c.vehicles);
  const allImages = allVehicles.map((v) => v.image);

  const openLightbox = (image) => {
    const index = allImages.indexOf(image);
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    if (currentImageIndex !== null) {
      const nextIndex = (currentImageIndex + 1) % allImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(allImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null) {
      const prevIndex =
        (currentImageIndex - 1 + allImages.length) % allImages.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(allImages[prevIndex]);
    }
  };

  return (
    <section
      id="fleet"
      className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Fleet & <span className="text-red-600">Vehicles</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Advanced vehicles and equipment supporting telecommunication and
            logistics operations across Indonesia
          </p>
        </motion.div>

        {/* Statistik */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "Total Vehicles", value: fleetStats.totalVehicles },
            { label: "Average Age", value: fleetStats.averageAge },
            { label: "Uptime", value: fleetStats.maintenance },
          ].map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl md:text-3xl font-bold text-red-600 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Semua kendaraan */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allVehicles.map((vehicle, index) => (
            <motion.div key={index} custom={index} variants={fadeUp}>
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden h-full flex flex-col">
                {/* Gambar */}
                <div
                  className="relative w-full cursor-pointer"
                  onClick={() => openLightbox(vehicle.image)}
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {vehicle.quantity} Units
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">
                      {vehicle.capacity}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 mb-2 sm:mb-3">
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                      {vehicle.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                      <Calendar size={14} className="mr-1" />
                      {vehicle.year}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {vehicle.type}
                    </span>
                  </div>
                </CardHeader>

                {/* Deskripsi */}
                <CardContent className="p-4 sm:p-5 md:p-6 pt-0 flex-grow">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {vehicle.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">
                      Specifications:
                    </h4>
                    <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                      {vehicle.specifications.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className="flex items-start text-xs sm:text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-1"></div>
                          <span className="leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox - Design sama dengan Services */}
      {selectedImage && currentImageIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // prevImage();
            }}
            className="absolute left-6 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft size={40} />
          </button>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl h-[70vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`Vehicle ${currentImageIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // nextImage();
            }}
            className="absolute right-6 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Fleet;
