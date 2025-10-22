"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, X } from "lucide-react";
import { fleetData, fleetStats } from "../data/fleet";
import { motion } from "framer-motion";

const Fleet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const allVehicles = fleetData.flatMap((c) => c.vehicles);

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
                  onClick={() => setSelectedImage(vehicle.image)}
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Fleet;
