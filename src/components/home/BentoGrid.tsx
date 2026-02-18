"use client";

import { motion } from "framer-motion";
import { Zap, DollarSign, Clock, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Flexibility & Scalability",
    description: "Scale your team up or down based on real-time project requirements — without long-term commitments.",
    icon: Layers,
    className: "md:col-span-2 bg-zinc-50 border-zinc-200",
  },
  {
    title: "Cost Efficiency",
    description: "Reduce recruitment, training, infrastructure, and employee benefit costs by accessing on-demand expertise.",
    icon: DollarSign,
    className: "md:col-span-1 bg-zinc-900 text-white border-zinc-900",
  },
  {
    title: "Faster Time-to-Market",
    description: "Accelerate development cycles by onboarding experienced professionals quickly.",
    icon: Clock,
    className: "md:col-span-1 bg-white border-zinc-200",
  },
  {
    title: "Access to Niche Skills",
    description: "Gain immediate access to specialized capabilities in AI/ML, DevOps, Cloud, and Cybersecurity.",
    icon: Zap,
    className: "md:col-span-2 bg-zinc-50 border-zinc-200",
  },
];

export function BentoGrid() {
  return (
    <section className="py-24 bg-white" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Why Choose Resource Augmentation?
          </h2>
          <p className="text-zinc-600 text-lg">
            Unlock the power of flexible talent to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative p-8 rounded-3xl border flex flex-col justify-between overflow-hidden transition-all hover:shadow-lg",
                benefit.className
              )}
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} />
                </span>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className={cn("leading-relaxed", 
                  benefit.className.includes("text-white") ? "text-zinc-300" : "text-zinc-600"
                )}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
