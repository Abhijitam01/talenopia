"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-3">Our Vision</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Empowering Growth Through People.
            </h3>
            <p className="text-zinc-600 leading-relaxed text-lg">
              To become the most trusted global partner for organizations seeking agility, expertise, and innovation — by enabling access to world-class talent, when and where it’s needed most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-3">Our Mission</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              High-Impact Teams. Digital Success.
            </h3>
            <p className="text-zinc-600 leading-relaxed text-lg">
              We bridge the talent gap by delivering skilled, reliable, and adaptable professionals who align with our clients’ vision. We help businesses scale faster, innovate smarter, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
