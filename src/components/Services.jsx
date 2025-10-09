"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Network,
  Cable,
  Settings,
  Warehouse,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { serviceInfo, projectTypes } from "@/data/services";
import Image from "next/image";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const iconMap = {
    Network: Network,
    Cable: Cable,
    Settings: Settings,
    Warehouse: Warehouse,
  };

  const openModal = (parentService, itemIndex) => {
    setSelectedParent(parentService);
    setSelectedItem(parentService.items[itemIndex]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setLightboxIndex(null);
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (selectedProject && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && lightboxIndex !== null) {
      setLightboxIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <div id="services" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive telecommunications engineering and industrial
            solutions designed to meet your business needs
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 max-w-7xl mx-auto">
          {projectTypes.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg w-96"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    <IconComponent
                      className="text-red-600 group-hover:text-white transition-colors duration-300"
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Services */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Telco Engineering */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Network className="text-red-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                {serviceInfo.services.telcoEngineering.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {serviceInfo.services.telcoEngineering.items.map(
                (service, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      openModal(serviceInfo.services.telcoEngineering, index)
                    }
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  >
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700">{service.title}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Scrap & Warehousing */}
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Warehouse className="text-red-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                {serviceInfo.services.scrapWarehousing.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {serviceInfo.services.scrapWarehousing.items.map(
                (service, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      openModal(serviceInfo.services.scrapWarehousing, index)
                    }
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  >
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700">{service.title}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today for professional telecommunications engineering
              and industrial solutions
            </p>
            <button
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ServiceModal
        parentService={selectedParent}
        service={selectedItem}
        relatedProjects={selectedParent?.items || []}
        onSelectProject={(i) => setSelectedItem(selectedParent.items[i])}
        onClose={() => {
          setSelectedParent(null);
          setSelectedItem(null);
        }}
      />
      {/* Lightbox */}
      {selectedProject && lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-5xl w-full flex justify-center">
            <Image
              src={selectedProject.images[lightboxIndex]}
              alt={`lightbox-${lightboxIndex}`}
              className="rounded-lg shadow-lg max-h-[90vh] object-contain"
              width={1200}
              height={800}
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
