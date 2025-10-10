"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const data = COMPANY_INFO;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = data.locations[0].phone.replace(/[^0-9]/g, "");
    const message = `
      *New Contact Message from Website* 🚀

      *Name:* ${formData.name}
      *Email:* ${formData.email}
      *Phone:* ${formData.phone || "-"}
      *Company:* ${formData.company || "-"}
      *Service Interest:* ${formData.service || "-"}
      *Message:* ${formData.message}

      Please respond as soon as possible. 🙌
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  // Variants untuk animasi container & item
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-20 relative overflow-hidden">
      {/* Subtle animated background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-32 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-700"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 xl:px-10 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* Header */}
        <motion.div variants={itemFadeUp} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-red-600 relative">
              Us
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-400 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your telecommunications project? Get in touch with
            our expert team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT: Info Cards */}
          <motion.div variants={container} className="lg:col-span-1 space-y-8">
            {/* Head Office */}
            <motion.div variants={itemFadeUp} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="text-red-600" size={24} />
                    <span className="text-red-600">Head Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{data.locations[0].address}</p>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-red-600" size={18} />
                    <Link
                      href={`tel:${data.locations[0].phone}`}
                      className="text-gray-700 hover:text-red-600 transition-colors duration-300"
                    >
                      {data.locations[0].phone}
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-red-600" size={18} />
                    <a
                      href="mailto:mispcenter@misp.co.id"
                      className="text-gray-700 hover:text-red-600 transition-colors duration-300"
                    >
                      mispcenter@misp.co.id
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={itemFadeUp} whileHover={{ scale: 1.02 }}>
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="text-red-600" size={24} />
                    <span className="text-red-600">Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">
                      8:00 AM - 12:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700">
                      <strong>Emergency Support:</strong> Available 24/7 for
                      urgent telecommunications issues
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact */}
            <motion.div variants={itemFadeUp} whileHover={{ scale: 1.03 }}>
              <Card className="bg-red-600 text-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-4 opacity-90">
                    Contact our team directly for urgent telecommunications
                    support
                  </p>
                  <div className="space-y-2">
                    <Link
                      href={`tel:${data.locations[0].phone}`}
                      className="block w-full bg-white text-red-600 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-100 transition-colors duration-300"
                    >
                      Call Now: {data.locations[0].phone}
                    </Link>
                    <Link
                      href={`https://wa.me/${data.locations[0].phone.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-green-600 transition-colors duration-300"
                    >
                      WhatsApp Chat
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div variants={itemFadeUp} className="lg:col-span-2">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center py-12"
                  >
                    <CheckCircle
                      className="text-green-500 mx-auto mb-4"
                      size={64}
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.div variants={itemFadeUp} className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-red-600 placeholder:text-red-600/25"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-red-600 placeholder:text-red-600/25"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemFadeUp} className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-red-600 placeholder:text-red-600/25"
                          placeholder="+62 xxx xxxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-red-600 placeholder:text-red-600/25"
                          placeholder="Your company name"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemFadeUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-red-600"
                      >
                        <option value="">Select a service</option>
                        <option value="telco-engineering">Telco Engineering</option>
                        <option value="ftth">FTTH Solutions</option>
                        <option value="network-optimization">Network Optimization</option>
                        <option value="scrap-management">Scrap Management</option>
                        <option value="warehousing">Warehousing Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div variants={itemFadeUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none text-red-600 placeholder:text-red-600/25"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </motion.div>

                    <motion.div variants={itemFadeUp}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-[103%] cursor-pointer shadow-lg hover:shadow-xl"
                      >
                        <Send size={20} className="mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
