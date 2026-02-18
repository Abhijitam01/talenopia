"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Cloud, Cpu, Lock, Repeat, Zap } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* ───── HERO ───── */}
      <section className="relative min-h-[calc(100vh-68px)] bg-[#0a0a0a] text-white overflow-hidden flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none hero-noise" />
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,16,46,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute -bottom-[30%] left-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(200,16,46,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-[4%] grid md:grid-cols-2 gap-12 relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-[#c8102e]" />
              <span className="text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[#c8102e]">
                Leading Resource Augmentation Firm
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.93] tracking-[0.02em] mb-7"
            >
              Enterprise<br />
              Ready <span className="text-[#c8102e]">Talent.</span><br />
              On Demand.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[0.97rem] leading-[1.75] text-white/50 max-w-md mb-10"
            >
              Talenopia bridges skill gaps for global enterprises—providing access to a vetted pool of top-tier IT and non-IT professionals without long hiring cycles or hidden costs.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#c8102e] text-white px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-[#a00d24] transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/20 inline-flex items-center gap-2 group"
              >
                Hire Talent
                <span className="w-4 h-[1px] bg-white relative transition-all group-hover:w-6">
                  <span className="absolute right-0 -top-[3px] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-white" />
                </span>
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:grid grid-cols-2 gap-2.5 content-center"
          >
            {/* Hero Grid Items */}
            <div className="bg-white/[0.04] border border-white/[0.07] p-6 hover:bg-white/[0.07] hover:border-[#c8102e]/30 transition-all duration-300 hover:-translate-y-1 group">
              <div className="bg-[#c8102e]/20 text-[#c8102e] text-[0.6rem] font-bold tracking-widest uppercase inline-block px-2.5 py-1 mb-3">
                Instant Access
              </div>
              <div className="text-white/80 font-semibold text-sm mb-2">Pre-Vetted Talent Pool</div>
              <p className="text-white/40 text-xs leading-relaxed">
                Developers, DevOps, AI/ML specialists, and cybersecurity experts ready to deploy immediately.
              </p>
            </div>

            <div className="bg-white/[0.04] border border-white/[0.07] p-6 hover:bg-white/[0.07] hover:border-[#c8102e]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="font-display text-[2.8rem] text-[#c8102e] leading-none mb-1">
                0%
              </div>
              <div className="text-[0.66rem] tracking-[0.12em] text-white/30 uppercase">
                Hidden Costs
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/[0.07] p-6 hover:bg-white/[0.07] hover:border-[#c8102e]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="font-display text-[2.8rem] text-white leading-none mb-1">
                4<span className="text-white/25 text-2xl">+</span>
              </div>
              <div className="text-[0.66rem] tracking-[0.12em] text-white/30 uppercase">
                Engagement Models
              </div>
            </div>

            <div className="col-span-2 bg-white/[0.04] border border-white/[0.07] p-6 hover:bg-white/[0.07] hover:border-[#c8102e]/30 transition-all duration-300 hover:-translate-y-1">
               <div className="bg-[#c8102e]/20 text-[#c8102e] text-[0.6rem] font-bold tracking-widest uppercase inline-block px-2.5 py-1 mb-3">
                Why Talenopia?
              </div>
              <div className="text-white/80 font-semibold text-sm mb-2">Seamless Team Extension</div>
              <p className="text-white/40 text-xs leading-relaxed">
                Our professionals integrate with your workflow as genuine team members—not external vendors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── MARQUEE ───── */}
      <Marquee />

      {/* ───── INTRO ───── */}
      <section className="py-24 px-[4%] bg-white">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#c8102e]" />
              <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
                Who We Are
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.7rem,3.2vw,2.6rem)] leading-tight text-[#0a0a0a] mb-5">
              Your Premier Partner in <em className="italic text-[#c8102e]">Resource Augmentation</em>
            </h2>
            <div className="w-10 h-[3px] bg-[#c8102e] mb-7" />
            <p className="text-[0.93rem] leading-[1.78] text-[#555] max-w-lg mb-8">
              Talenopia is a leading resource augmentation firm specializing in IT and non-IT staff augmentation. We bridge skill gaps for global enterprises by providing access to a vetted pool of top-tier professionals who integrate seamlessly with your workflow.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-7 py-3 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-[#c8102e] transition-all hover:-translate-y-0.5"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <motion.div
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#c8102e]" />
              <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
                What We Offer
              </span>
            </div>
            <h2 className="font-serif text-[1.45rem] text-[#0a0a0a] mb-5">
              Done Right — Every Time
            </h2>
            <div className="w-10 h-[3px] bg-[#c8102e] mb-7" />
            <div className="grid gap-3">
              {[
                "Scale teams without long-term hiring commitments",
                "Access niche expertise on demand — cloud, AI, DevOps",
                "Maintain full control over scope, cost, and delivery",
                "Resources evaluated for skills AND cultural alignment",
                "Pay-as-you-go talent — no fixed bids",
                "Transparent pricing — zero hidden charges"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3 py-2 border-b border-[#e0e0e0] text-[0.82rem] text-[#555]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1.5 shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="inline-block bg-[#c8102e] text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Speed
            </div>
            <div className="font-display text-[3.8rem] leading-none text-[#0a0a0a] mb-1">
              48<span className="text-[#c8102e]">h</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-[#888580]">
              Time to First CVs
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-[#0a0a0a] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="inline-block bg-[#c8102e]/20 text-[#c8102e] text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Scale
            </div>
            <div className="font-display text-[3.8rem] leading-none text-white mb-1">
              IT<span className="text-white/30 text-[1.8rem]">&</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-white/30">
              Non-IT Coverage
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="inline-block bg-[#c8102e] text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Trust
            </div>
            <div className="font-display text-[3.8rem] leading-none text-[#0a0a0a] mb-1">
              100<span className="text-[#c8102e]">%</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-[#888580]">
              Pricing Transparency
            </div>
          </motion.div>

          {/* LARGE BLOCKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="w-12 h-12 flex items-center justify-center bg-[#f2f1ef] text-xl mb-5 rounded-sm">☁️</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-[#0a0a0a]">Cloud Engineering</h3>
            <p className="text-[0.83rem] text-[#555] leading-relaxed mb-4">
              Certified professionals across AWS, Azure, and GCP for cloud-native architecture, migration, and management at enterprise scale.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["AWS", "Azure", "GCP", "Cloud-Native", "IaC"].map((t) => (
                <span key={t} className="text-[0.68rem] font-semibold px-2.5 py-1 bg-[#f2f1ef] border border-[#e0e0e0]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 bg-[#0a0a0a] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 text-xl mb-5 rounded-sm">🤖</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-white">AI / ML Engineers</h3>
            <p className="text-[0.83rem] text-white/50 leading-relaxed mb-4">
              Machine learning specialists and AI engineers ready for enterprise-grade deployments, innovation pipelines, and MLOps implementation.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Deep Learning", "NLP", "MLOps", "PyTorch", "Data Science"].map((t) => (
                <span key={t} className="text-[0.68rem] font-semibold px-2.5 py-1 bg-white/[0.06] text-white/60 border border-white/10 group-hover:border-[#c8102e] group-hover:bg-[#c8102e] group-hover:text-white transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-[#c8102e] p-8 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden md:row-span-2 flex flex-col justify-center"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white/15 text-white text-xl mb-5 rounded-sm">⚡</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-white">Faster Time-to-Market</h3>
            <p className="text-[0.83rem] text-white/80 leading-relaxed">
              Accelerate project timelines by quickly onboarding skilled professionals without long recruitment cycles or ramp-up delays.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
             <div className="inline-block bg-[#c8102e] text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Flexible
            </div>
            <div className="font-display text-[3.8rem] leading-none text-[#0a0a0a] mb-1">
              4<span className="text-[#c8102e]">+</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-[#888580]">
              Engagement Models
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="w-12 h-12 flex items-center justify-center bg-[#f2f1ef] text-xl mb-5 rounded-sm">🔐</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-[#0a0a0a]">Cybersecurity Professionals</h3>
            <p className="text-[0.83rem] text-[#555] leading-relaxed mb-4">
              Security analysts, architects, and compliance specialists to protect your digital environment and meet enterprise-grade security standards.
            </p>
             <div className="flex flex-wrap gap-1.5">
              {["SOC Analysts", "Pen Testing", "Compliance", "Risk Mgmt"].map((t) => (
                <span key={t} className="text-[0.68rem] font-semibold px-2.5 py-1 bg-[#f2f1ef] border border-[#e0e0e0]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
             <div className="inline-block bg-[#c8102e] text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Savings
            </div>
            <div className="font-display text-[1.8rem] leading-none text-[#0a0a0a] mb-1">
              ZERO
            </div>
            <div className="text-[0.64rem] tracking-[0.1em] uppercase text-[#888580]">
              Overhead on Hiring
            </div>
            <div className="mt-2 text-[0.76rem] text-[#555]">
              Reduce recruitment, training, and benefits costs.
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-[#f2f1ef] p-8 relative group overflow-hidden"
          >
             <div className="w-12 h-12 flex items-center justify-center bg-white text-xl mb-5 rounded-sm">🔄</div>
             <h3 className="font-bold text-[0.97rem] mb-2 text-[#0a0a0a]">DevOps & Cloud-Native</h3>
             <p className="text-[0.83rem] text-[#555] leading-relaxed">
               CI/CD, containerization, IaC, and modern delivery practices for high-velocity engineering teams.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-[#0a0a0a] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="bg-[#c8102e]/20 text-[#c8102e] text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3 inline-block">
              Non-IT Augmentation
            </div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-white">Beyond Technology Roles</h3>
            <p className="text-[0.83rem] text-white/45 leading-relaxed mb-4">
              Talenopia supports organizations with non-IT resource augmentation—operations, compliance, marketing, and business functions—ensuring holistic scaling under a single engagement model.
            </p>
             <div className="flex flex-wrap gap-1.5">
              {["Operations", "Marketing", "Compliance", "Business Support", "Governance"].map((t) => (
                <span key={t} className="text-[0.68rem] font-semibold px-2.5 py-1 bg-white/[0.06] text-white/60 border border-white/10 group-hover:border-[#c8102e] group-hover:bg-[#c8102e] group-hover:text-white transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── PROCESS ───── */}
      <section className="bg-[#0a0a0a] py-24 px-[4%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-[1.5px] bg-[#c8102e]" />
            <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
              How It Works
            </span>
          </div>
          <h2 className="font-serif text-[2.6rem] text-white mb-5">
            A Simple, <em className="italic text-[#c8102e]">Enterprise-Friendly</em> Process
          </h2>
          <div className="w-10 h-[3px] bg-[#c8102e] mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-4 border border-white/[0.06]">
          {[
            {
              step: "01",
              title: "Requirement Discussion",
              desc: "Understand your project needs, timelines, skill expectations, and cultural requirements before anything else."
            },
            {
              step: "02",
              title: "Resource Shortlisting",
              desc: "Share CVs of pre-vetted professionals—curated specifically for your requirements, not generic profiles."
            },
            {
              step: "03",
              title: "Interview & Selection",
              desc: "You evaluate and select the right talent. Full control over who joins your team and when."
            },
            {
              step: "04",
              title: "Onboarding & Integration",
              desc: "Smooth induction into your workflow with minimal disruption to ongoing operations."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border-r border-white/[0.06] last:border-r-0 hover:bg-[#c8102e]/[0.04] transition-colors relative group"
            >
              <span className="block font-display text-[4.5rem] leading-none text-white/[0.04] mb-[-14px]">
                {item.step}
              </span>
              <h3 className="text-[0.88rem] font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[0.78rem] text-white/35 leading-relaxed">{item.desc}</p>
              
              {/* Connector */}
              {i < 3 && (
                <div className="hidden md:flex absolute top-10 -right-3 w-6 h-6 border-[1.5px] border-[#c8102e]/40 rounded-full bg-[#0a0a0a] items-center justify-center text-[#c8102e] text-[0.65rem] z-10">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── WHY SECTION ───── */}
      <section className="bg-[#f8f7f5] py-24 px-[4%]">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-20 items-center">
          <motion.div
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#c8102e]" />
              <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">
              Built for <em className="italic text-[#c8102e]">Long-Term</em> Partnerships
            </h2>
            <div className="w-10 h-[3px] bg-[#c8102e] mb-7" />
            <p className="text-[0.93rem] leading-[1.78] text-[#555] max-w-lg mb-8">
              Organizations choose Talenopia because we focus on reliability, clarity, and outcomes. We don't just provide resources—we build partnerships that scale with your business goals.
            </p>
             <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-7 py-3 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-[#c8102e] transition-all hover:-translate-y-0.5"
            >
              Talk to an Expert
            </Link>
          </motion.div>
          
          <motion.div
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-[1px] mt-6"
          >
            {[
              { icon: "⚡", title: "Reduce Hiring Time", text: "Access pre-vetted experts instantly—no weeks of recruitment overhead or long processes." },
              { icon: "◎", title: "Control Costs", text: "Scale up or down as needed—pay only for what you use, with full transparency." },
              { icon: "⟳", title: "Seamless Integration", text: "Our professionals work as genuine members of your team, not as external vendors." },
              { icon: "★", title: "Domain Expertise", text: "Skilled across Cloud, DevOps, Data, AI/ML, Cybersecurity, Blockchain, and more." },
              { icon: "✓", title: "Cultural & Compliance Fit", text: "Every resource aligned to your environment, values, and enterprise-grade standards." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 bg-white border border-[#dedbd6] hover:border-black hover:bg-[#f2f1ef] transition-colors group"
              >
                <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-[#0a0a0a] text-[#c8102e] text-[0.95rem] group-hover:bg-[#c8102e] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[0.83rem] font-bold text-[#0a0a0a] mb-1">{item.title}</h4>
                  <p className="text-[0.78rem] text-[#555] leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── AUGMENTATION EXPLAINED ───── */}
      <section className="bg-[#0a0a0a] py-24 px-[4%]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[1.5px] bg-[#c8102e]" />
              <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
                Resource Augmentation Explained
              </span>
            </div>
            <h2 className="font-serif text-[2.6rem] text-white mb-5">
              Flexible, Scalable, <em className="italic text-[#c8102e]">and Skilled</em>
            </h2>
            <div className="w-10 h-[3px] bg-[#c8102e] mb-7" />
            <p className="text-[0.93rem] leading-[1.78] text-white/55 max-w-lg mb-10">
              Resource Augmentation lets you extend your team with expert professionals—without the long hiring cycles or overheads. Whether you need one engineer or an entire team, Talenopia provides ready-to-deploy talent that integrates seamlessly with your workflow.
            </p>
             <Link
              href="/services"
              className="border border-white/30 text-white px-7 py-3 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-white/10 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              View All Services
              <span className="w-4 h-[1px] bg-white relative">
                 <span className="absolute right-0 -top-[3px] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-white" />
              </span>
            </Link>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="grid grid-cols-2 gap-2.5"
          >
             <motion.div variants={fadeInUp} className="col-span-2 p-7 border border-[#c8102e]/20 bg-[#c8102e]/10 hover:bg-white/[0.06] hover:border-white/10 transition-all">
                <div className="text-[1.4rem] mb-3">🔄</div>
                <h4 className="text-[0.83rem] font-bold text-white mb-1.5">Flexibility & Scalability</h4>
                <p className="text-[0.76rem] text-white/40 leading-relaxed">
                  Easily scale your team up or down based on project needs—without long-term commitments or fixed headcount pressure.
                </p>
             </motion.div>
             
             <motion.div variants={fadeInUp} className="p-7 border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all">
                <div className="text-[1.4rem] mb-3">💰</div>
                <h4 className="text-[0.83rem] font-bold text-white mb-1.5">Cost Efficiency</h4>
                <p className="text-[0.76rem] text-white/40 leading-relaxed">
                  Reduce overhead like recruitment, training, and benefits.
                </p>
             </motion.div>

             <motion.div variants={fadeInUp} className="p-7 border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all">
                <div className="text-[1.4rem] mb-3">🚀</div>
                <h4 className="text-[0.83rem] font-bold text-white mb-1.5">Faster Time-to-Market</h4>
                <p className="text-[0.76rem] text-white/40 leading-relaxed">
                  Accelerate project timelines by quickly onboarding skilled pros.
                </p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── CTA STRIP ───── */}
      <div className="bg-[#c8102e] py-20 px-[4%] flex flex-wrap items-center justify-between gap-10">
        <motion.h2
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="font-display text-[clamp(2rem,4vw,3rem)] text-white leading-tight max-w-xl"
        >
          Ready to Build Your Team with Confidence?
        </motion.h2>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex gap-3 flex-wrap"
        >
          <Link
            href="/contact"
            className="border border-white text-white px-7 py-3 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-white/10 transition-all"
          >
            Hire Talent
          </Link>
          <Link
            href="/contact"
            className="bg-white text-[#c8102e] px-7 py-3 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-gray-100 transition-all inline-flex items-center gap-2"
          >
            Contact Us
             <span className="w-4 h-[1px] bg-[#c8102e] relative">
                 <span className="absolute right-0 -top-[3px] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-[#c8102e]" />
              </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
