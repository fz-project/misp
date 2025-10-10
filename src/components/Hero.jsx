"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "../data/company";
import Image from "next/image";

const Hero = () => {
  const dataCompany = COMPANY_INFO;

  return (
    <section
      id="home"
      className="relative mt-28 py-10 lg:py-12 flex items-center overflow-hidden scroll-mt-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                <CheckCircle size={16} className="mr-2" />
                Established Since 2016
              </div>

              <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-snug">
                Leading{" "}
                <span className="text-red-600 relative">
                  Telecommunications
                  <div className="absolute -bottom-0.5 lg:-bottom-1 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
                </span>{" "}
                Engineering Solutions
              </h1>

              <p className="text-md md:text-lg -mt-2 lg:text-xl text-gray-600 leading-relaxed">
                Professional telecommunications infrastructure, Warehousing and
                industrial scrap management services across Indonesia. Trusted
                by major telecom operators.
              </p>
            </motion.div>

            {/* STATS SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {dataCompany.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-red-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={dataCompany.logo}
                      alt={dataCompany.name}
                      className="h-16 w-16 object-contain"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {dataCompany.shortName}
                      </h3>
                      <p className="text-red-600 font-medium">
                        ISO Certified Company
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">
                        150+ Major Projects Completed
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">
                        5 Strategic Warehouse Locations
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">
                        4 ISO Certifications
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700 font-medium">
                      "Trusted by major telecommunications operators across
                      Indonesia"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
