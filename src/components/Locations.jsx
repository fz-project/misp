"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, User, Building } from "lucide-react";
import { warehouseInfo } from "../data/warehouse";
import WarehouseSection from "./WareHouseSection";

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Locations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic warehouse and office locations across Indonesia to serve
            you better
          </p>
        </div>

        {/* Locations Grid */}

        <WarehouseSection />

        {/* Coverage Map Section */}
        {/* <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nationwide Coverage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {warehouseInfo.locations.map((location, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900">{location.city}</h4>
                <p className="text-sm text-gray-600 mt-1">{location.type}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Need Service in Your Area?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our strategic locations ensure fast response times and efficient
              service delivery across Indonesia
            </p>
            <button
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Find Nearest Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
