"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Monitor, Code, Layers } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DesignLab() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-[100px] pb-20">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16 text-center"
        >
          <div className="flex justify-center items-center gap-2 text-red mb-4">
            <Layers size={20} />
            <span className="text-sm font-bold tracking-widest uppercase">
              Talenopia Design Lab
            </span>
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl mb-6">
            Concept <span className="text-red">Showcase</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore the evolution of Talenopia's digital presence. This lab
            features the live production application alongside distinct
            conceptual iterations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Production App */}
          <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red/50 transition-colors group relative flex flex-col">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Live Production
                </span>
              </div>
              <div className="h-48 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center p-8">
                 <Monitor size={64} className="text-white/20 group-hover:text-red transition-colors duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-bebas text-3xl mb-2 group-hover:text-red transition-colors">
                  Available Now
                </h3>
                <p className="text-zinc-400 mb-8 flex-1">
                  The fully interactive Next.js application. Optimized for performance, 
                  accessibility, and featuring the final selected design system.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:gap-4 transition-all"
                >
                  Launch App <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* New Concept */}
          <ConceptCard 
            title="Experimental Concept"
            subtitle="Variant: 'New'"
            description="An experimental layout exploring alternative navigation patterns and hero interactions."
            link="/concepts/new.html"
            preview="N"
          />

          {/* Fourth Concept */}
          <ConceptCard 
            title="Enterprise Edition"
            subtitle="Variant: 'Fourth'"
            description="A corporate-focused iteration emphasizing data density and information hierarchy."
            link="/concepts/fouth.html"
            preview="F"
          />

          {/* Second Concept */}
          <ConceptCard 
            title="Modern Minimalist"
            subtitle="Variant: 'Second'"
            description="Focusing on negative space and stark typography for a bold, modern impact."
            link="/concepts/second.html"
            preview="S"
          />

          {/* Third Concept */}
          <ConceptCard 
            title="Creative Direction"
            subtitle="Variant: 'Third'"
            description="Exploring unique color pairings and non-standard grid layouts for creative appeal."
            link="/concepts/third.html"
            preview="T"
          />

        </motion.div>
      </div>
    </div>
  );
}

function ConceptCard({ title, subtitle, description, link, preview }: any) {
  return (
    <motion.div variants={item}>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-colors group relative flex flex-col"
      >
        <div className="h-40 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 to-transparent"></div>
            <span className="font-bebas text-9xl text-zinc-800 group-hover:text-zinc-700 transition-colors select-none">
                {preview}
            </span>
            <div className="absolute top-4 right-4">
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Code size={14} className="text-red" />
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              HTML Prototype
            </span>
          </div>
          <h3 className="font-bebas text-2xl mb-1 text-white group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 font-mono mb-4">{subtitle}</p>
          <p className="text-zinc-400 text-sm mb-6 flex-1">
            {description}
          </p>
          <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
             <span>View Prototype</span>
             <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
