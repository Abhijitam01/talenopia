"use client";

import { motion } from "framer-motion";

const industries = [
  "FinTech",
  "HealthTech",
  "E-Commerce",
  "SaaS & Technology",
  "Manufacturing",
  "Enterprise IT Services",
  "Consulting",
  "Professional Services"
];

export function Industries() {
  return (
    <section className="py-24 bg-white" id="industries">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
          Industries We Support
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm md:text-base font-medium hover:border-zinc-300 hover:bg-zinc-100 transition-colors cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
