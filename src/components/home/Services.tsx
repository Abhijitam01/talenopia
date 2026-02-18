"use client";

import { motion } from "framer-motion";
import { Code2, Users, Receipt } from "lucide-react";

const services = [
  {
    title: "IT Staff Augmentation",
    description: "On-demand developers, architects, DevOps engineers, QA specialists, AI/ML professionals, and cybersecurity experts ready to contribute to your technology initiatives.",
    icon: Code2,
  },
  {
    title: "Non-IT Resource Augmentation",
    description: "Support across operations, compliance, marketing, business administration, and enterprise support roles to ensure holistic organizational scaling.",
    icon: Users,
  },
  {
    title: "Time & Material (T&M)",
    description: "Pay-as-you-go flexibility. No fixed bids. No scope lock-ins. Transparent billing based on actual work performed — hourly or daily.",
    icon: Receipt,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-zinc-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Comprehensive Augmentation Solutions
          </h2>
          <p className="text-zinc-600 text-lg">
            Whether you need technical expertise or operational support, we have the right professionals for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-zinc-100 text-zinc-900 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
