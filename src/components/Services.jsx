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
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

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
    setSelectedProject(parentService.items[itemIndex]);
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
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive telecommunications engineering and industrial
            solutions designed to meet your business needs
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-20 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          {projectTypes.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.15 },
                  },
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg w-96">
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Telco Engineering */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Left Text */}
          <div>
            <div className="flex items-center space-x-3 mb-6 relative gap-2">
              <Network className="text-red-600" size={32} />
              <h3 className="text-3xl font-bold text-black ">
                  
                  {serviceInfo.services.telcoEngineering.title}

              </h3>
              <div className="absolute -bottom-2 lg:-bottom-3 left-0 right-0 h-1 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {serviceInfo.services.telcoEngineering.items.map(
                (service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    // onClick={() =>
                    //   openModal(serviceInfo.services.telcoEngineering, index)
                    // }
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition duration-300"
                  >
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700">{service.title}</span>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Right Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {serviceInfo.services.telcoEngineering.items
              .find((item) => item.title === "Project Rollout") // cari item Rollout
              ?.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-56 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Project Rollout ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold px-3 text-center">
                      Project Rollout
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Scrap & Warehousing */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Left Gallery */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            {serviceInfo.services.scrapWarehousing.items
              .find((item) => item.title === "Scrap Delivery Services")
              ?.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-56 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  // onClick={() =>
                  //   openModal(serviceInfo.services.scrapWarehousing, i)
                  // }
                >
                  <Image
                    src={img}
                    alt={`Scrap Delivery Services ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold px-3 text-center">
                      Scrap Delivery Services
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Right Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-6 relative">
              <Warehouse className="text-red-600" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {serviceInfo.services.scrapWarehousing.title}
              </h3>
              <div className="absolute -bottom-2 lg:-bottom-3 left-0 right-0 h-1 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {serviceInfo.services.scrapWarehousing.items.map(
                (service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    // onClick={() =>
                    //   openModal(serviceInfo.services.scrapWarehousing, index)
                    // }
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition duration-300 cursor-pointer"
                  >
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700">{service.title}</span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="bg-red-600 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today for professional telecommunications engineering
              and industrial solutions
            </p>
            <button
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal & Lightbox */}
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

      {selectedProject && lightboxIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
          <motion.div
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl h-[70vh]"
          >
            <Image
              src={selectedProject.images[lightboxIndex]}
              alt={`Project Image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
