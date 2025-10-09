"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Truck, Settings, Users, Calendar, Gauge } from "lucide-react";
import { fleetData, fleetStats } from "../data/fleet";

const Fleet = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = {
    "Heavy Trucks": Truck,
    "Specialized Vehicles": Settings,
    "Support Vehicles": Users,
    "Warehouse Equipment": Gauge,
  };

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Armada & <span className="text-red-600">Kendaraan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kendaraan dan peralatan terdepan untuk mendukung operasional
            telekomunikasi dan logistik di seluruh Indonesia
          </p>
        </div>

        {/* Fleet Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {fleetStats.totalVehicles}
            </div>
            <div className="text-gray-600">Total Kendaraan</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {fleetStats.categories}
            </div>
            <div className="text-gray-600">Kategori</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {fleetStats.averageAge}
            </div>
            <div className="text-gray-600">Rata-rata Umur</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {fleetStats.maintenance}
            </div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {fleetData.map((category, index) => {
            const IconComponent = categoryIcons[category.category];
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md"
                }`}
              >
                <IconComponent size={20} />
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {fleetData[activeCategory].vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {vehicle.quantity} Unit
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">
                    {vehicle.capacity}
                  </span>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {vehicle.name}
                  </CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {vehicle.year}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.type}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Spesifikasi:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {vehicle.specifications.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
