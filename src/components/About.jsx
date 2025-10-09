"use client";
import React from "react";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const About = () => {

  const data = COMPANY_INFO;

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">{data.shortName}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted leader in
            telecommunications engineering and industrial solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {data.name} began its journey as UD. Sumber Rejeki in
                2006, focusing on scrap and non-scrapping materials. Through
                strategic evolution and expansion, we transformed into CV.
                Maulidiya in 2012, venturing into telecommunications services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In 2016, we achieved a significant milestone by becoming a
                Limited Liability Company under our current name, establishing
                ourselves as a professional telecommunications engineering and
                industrial scrapping management provider.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {data.previousNames.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">{item.year}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    {index === 0 && (
                      <p className="text-sm text-gray-600">
                        Started with scrap materials
                      </p>
                    )}
                    {index === 1 && (
                      <p className="text-sm text-gray-600">
                        Expanded into telecommunications
                      </p>
                    )}
                    {index === 2 && (
                      <p className="text-sm text-gray-600">
                        Became Limited Liability Company
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ISO Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="text-red-600" size={24} />
                      <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{cert.type}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-red-600 text-white rounded-xl">
              <h4 className="text-xl font-bold mb-3">Why Choose Us?</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>8+ Years of Industry Experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>ISO 9001, 14001, 45001, 37001 Certified</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Nationwide Coverage with 5 Locations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Professional & Environmentally Friendly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="text-red-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {data.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="text-red-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              {data.mission.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
