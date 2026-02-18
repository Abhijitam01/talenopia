"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "IT Staff Augmentation",
  "AI / ML Engineers",
  "Cloud Engineering",
  "DevOps Specialists",
  "Cybersecurity Experts",
  "Non-IT Augmentation",
  "Transparent Pricing",
  "Blockchain Developers",
  "Enterprise Ready",
];

export function Marquee() {
  return (
    <div className="bg-[#c8102e] overflow-hidden py-3.5 flex whitespace-nowrap">
      <motion.div
        className="flex"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 22,
        }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-6 px-7 font-display text-base tracking-[0.1em] text-white border-r border-white/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
