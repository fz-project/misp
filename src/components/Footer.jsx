"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

/**
 * 🔹 Footer Section with subtle scroll-based animations
 * - Each column fades up sequentially
 * - Contact icons animate softly on hover
 * - Smooth scroll to section links
 */
const Footer = () => {
  const data = COMPANY_INFO;

  /** 🔹 Smooth scroll helper */
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /** ✨ Motion variants for columns */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="bg-gray-900 text-white scroll-smooth">
      {/* Main Footer */}
      <motion.div
        className="container mx-auto px-4 py-16 xl:px-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="grid lg:grid-cols-4 gap-8"
          variants={container}
        >
          {/* Company Info */}
          <motion.div variants={item}>
            <div className="flex items-center space-x-3 mb-6">
              <motion.img
                src={data.logo}
                alt={data.name}
                className="h-12 w-12 object-contain"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h3 className="text-xl font-bold">{data.shortName}</h3>
                <p className="text-gray-400 text-sm">{data.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading telecommunications engineering and industrial solutions
              provider, trusted by major operators across Indonesia since 2016.
            </p>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Award className="mr-2 text-yellow-400" size={18} />
                ISO Certified
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.certifications.map((cert, index) => (
                  <motion.span
                    key={index}
                    variants={item}
                    className="px-2 py-1 bg-red-600 text-white text-xs rounded"
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Telco Engineering",
                "Network Planning",
                "FTTH Solutions",
                "Network Optimization",
                "Scrap Management",
                "Warehousing Solutions",
              ].map((service, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Locations", href: "#locations" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 4 }}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <li>
                <span className="text-gray-400">Careers</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 4 }}
              >
                <MapPin className="text-red-400 mt-1 flex-shrink-0" size={18} />
                <a
                  href={data.locations[0].mapsUrl}
                  target="_blank"
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {data.locations[0].address}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 4 }}
              >
                <Phone className="text-red-400 flex-shrink-0" size={18} />
                <a
                  href={`tel:${data.locations[0].phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {data.locations[0].phone}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 4 }}
              >
                <Mail className="text-red-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:mispcenter@misp.co.id"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  mispcenter@misp.co.id
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 4 }}
              >
                <Globe className="text-red-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">www.misp.co.id</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-6 xl:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 cursor-pointer"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
          </div>

          {/* Legal Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500 grid md:grid-cols-2 gap-4">
            <p>
              Company Registration: {data.legalInfo.companyRegistration} <br />
              NPWP: {data.legalInfo.npwp}
            </p>
            <p>
              Trade License: {data.legalInfo.tradeLicense} <br />
              Minister Decree: {data.legalInfo.ministerDecree}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
