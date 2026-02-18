"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-zinc-900 rounded-3xl p-12 md:p-24 text-center overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Team?
            </h2>
            <p className="text-zinc-400 text-xl mb-10 leading-relaxed">
              Whether you&apos;re scaling rapidly or addressing critical skill gaps — Talenopia delivers enterprise-ready talent without friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="mailto:info@talenopia.com">
                <Button size="lg" className="h-14 px-8 text-lg bg-white text-zinc-900 hover:bg-zinc-100">
                  Hire Talent Now
                </Button>
               </Link>
               <Link href="mailto:info@talenopia.com">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent text-white border-zinc-700 hover:bg-zinc-800 hover:text-white">
                  Contact Us
                </Button>
               </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
