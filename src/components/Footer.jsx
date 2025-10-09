"use client";
import React from "react";
import { MapPin, Phone, Mail, Globe, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const Footer = () => {
  const data = COMPANY_INFO;

  /** 🔹 Fungsi untuk scroll smooth ke section tertentu */
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 xl:px-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={data.logo}
                alt={data.name}
                className="h-12 w-12 object-contain"
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
                <Award className="mr-2" size={18} />
                ISO Certified
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-red-600 text-white text-xs rounded"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
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
                <li key={i}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Locations", href: "#locations" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-gray-400">Careers</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href={data.locations[0].mapsUrl} target="_blank" className="text-gray-400 text-sm leading-relaxed">
                    {data.locations[0].address}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-red-400 flex-shrink-0" size={18} />
                <a
                  href={`tel:${data.locations[0].phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {data.locations[0].phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-red-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:mispcenter@misp.co.id"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  mispcenter@misp.co.id
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="text-red-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">www.misp.co.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 xl:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">Privacy Policy</span>
              <span className="text-gray-400">Terms of Service</span>
              <span className="text-gray-400">Cookie Policy</span>
            </div>
          </div>

          {/* Legal Information */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-500">
              <div>
                <p>
                  Company Registration: {data.legalInfo.companyRegistration}
                </p>
                <p>NPWP: {data.legalInfo.npwp}</p>
              </div>
              <div>
                <p>Trade License: {data.legalInfo.tradeLicense}</p>
                <p>Minister Decree: {data.legalInfo.ministerDecree}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
