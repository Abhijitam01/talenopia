"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <div className="pt-[100px] min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-red mb-6">
              <span className="h-px w-8 bg-red"></span>
              <span className="text-sm font-bold tracking-widest uppercase">
                Contact Us
              </span>
            </div>
            <h1 className="font-bebas text-6xl md:text-8xl leading-none mb-6">
              Let&apos;s Build <span className="text-red">Together</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Reach out for resource augmentation, specialized talent
              requirements, or engagement model discussions. We&apos;re ready to
              partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 align-start">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                Get in <span className="text-red italic">Touch</span>
              </h2>
              <p className="text-text-light mb-12 leading-relaxed">
                Whether you need a single specialized developer or a full pod of
                experts, we&apos;re here to help you scale. Fill out the form, and
                we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-0 border-t border-gray-200">
                <div className="flex items-start gap-4 py-8 border-b border-gray-200 group">
                  <div className="w-10 h-10 bg-black text-red flex items-center justify-center hover:bg-red hover:text-white transition-colors duration-300 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Email
                    </h3>
                    <p className="font-semibold text-lg hover:text-red transition-colors cursor-pointer">
                      info@talenopia.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-8 border-b border-gray-200 group">
                  <div className="w-10 h-10 bg-black text-red flex items-center justify-center hover:bg-red hover:text-white transition-colors duration-300 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Phone
                    </h3>
                    <p className="font-semibold text-lg hover:text-red transition-colors cursor-pointer">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-8 border-b border-gray-200 group">
                  <div className="w-10 h-10 bg-black text-red flex items-center justify-center hover:bg-red hover:text-white transition-colors duration-300 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Location
                    </h3>
                    <p className="font-semibold text-lg">
                      123 Innovation Drive, Tech City
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  You Can Reach Out For
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-gray-200 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                    IT Resource Augmentation
                  </span>
                  <span className="px-3 py-1 border border-gray-200 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                    Non-IT Staffing
                  </span>
                  <span className="px-3 py-1 border border-gray-200 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                    Specialized Talent
                  </span>
                  <span className="px-3 py-1 border border-gray-200 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                    Engagement Models
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
