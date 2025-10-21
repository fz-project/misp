"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Truck, Settings, Users, Calendar, Gauge } from "lucide-react";
import { fleetData, fleetStats } from "../data/fleet";
import { motion } from "framer-motion";

const Fleet = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = {
    "Heavy Trucks": Truck,
    "Specialized Vehicles": Settings,
    "Support Vehicles": Users,
    "Warehouse Equipment": Gauge,
  };

  /** Animation variants for fade-up effect */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="fleet" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fleet & <span className="text-red-600">Vehicles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced vehicles and equipment supporting telecommunication and
            logistics operations across Indonesia
          </p>
        </motion.div>

        {/* Fleet Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "Total Vehicles", value: fleetStats.totalVehicles },
            { label: "Categories", value: fleetStats.categories },
            { label: "Average Age", value: fleetStats.averageAge },
            { label: "Uptime", value: fleetStats.maintenance },
          ].map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fleetData.map((category, index) => {
            const IconComponent = categoryIcons[category.category];
            return (
              <motion.button
                key={index}
                custom={index}
                variants={fadeUp}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  activeCategory === index
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md"
                }`}
              >
                <IconComponent size={20} />
                <span>{category.category}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Vehicles Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fleetData[activeCategory].vehicles.map((vehicle, index) => (
            <motion.div key={index} custom={index} variants={fadeUp}>
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.quantity} Units
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
                      Specifications:
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
