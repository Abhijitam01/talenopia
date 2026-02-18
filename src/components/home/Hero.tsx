"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Enterprise-Grade Talent. <br />
              <span className="text-zinc-500">Delivered with Precision.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bridge critical skill gaps with vetted high-performing professionals. From developers to cybersecurity experts, we enable you to scale faster and execute confidently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#contact">
              <Button size="lg" className="h-12 px-8 text-base bg-zinc-900 hover:bg-zinc-800">
                Hire Talent
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base group">
                Talk to an Expert
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof / Trust Indicators can go here later */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-zinc-100"
          >
            <p className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-widest">
              Trusted by global enterprises
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Placeholders for logos */}
              <div className="h-8 w-24 bg-zinc-200 rounded animate-pulse" />
              <div className="h-8 w-24 bg-zinc-200 rounded animate-pulse" />
              <div className="h-8 w-24 bg-zinc-200 rounded animate-pulse" />
              <div className="h-8 w-24 bg-zinc-200 rounded animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
