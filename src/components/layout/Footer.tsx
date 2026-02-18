"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d0d0d] pt-16 pb-7 px-[5%] border-t border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr_1fr_1.5fr] gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 group mb-6">
            <div className="w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <polygon
                  points="50,6 90,90 10,90"
                  stroke="#fff"
                  strokeWidth="8"
                  fill="none"
                  strokeLinejoin="round"
                />
                <line
                  x1="28"
                  y1="65"
                  x2="72"
                  y2="65"
                  stroke="#fff"
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.4rem] tracking-[0.06em] text-white">
                TALENOPIA
              </span>
              <small className="text-[0.38rem] font-bold tracking-[0.28em] text-white/50 uppercase mt-[2px]">
                Utopia of Talent Sourcing
              </small>
            </div>
          </Link>
          <p className="text-[0.8rem] text-white/35 leading-[1.72] max-w-[260px]">
             A resource augmentation company built for organizations that value agility, precision, and trust.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[0.58rem] font-bold tracking-[0.22em] uppercase text-white/30 mb-4">Navigation</h4>
          <Link href="/" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Home</Link>
          <Link href="/about" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">About Us</Link>
          <Link href="/services" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Services</Link>
          <Link href="/careers" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Careers</Link>
          <Link href="/contact" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Contact</Link>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[0.58rem] font-bold tracking-[0.22em] uppercase text-white/30 mb-4">Services</h4>
          <Link href="/services" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">IT Augmentation</Link>
          <Link href="/services" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Non-IT Augmentation</Link>
          <Link href="/services" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Specialized Talent</Link>
          <Link href="/services" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors w-fit">Engagement Models</Link>
        </div>

        {/* Contact */}
        <div>
           <h4 className="text-[0.58rem] font-bold tracking-[0.22em] uppercase text-white/30 mb-4">Contact</h4>
           <div className="flex flex-col gap-2.5">
             <a href="mailto:info@talenopia.com" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors">info@talenopia.com</a>
             <a href="mailto:careers@talenopia.com" className="text-[0.8rem] text-white/45 hover:text-[#c8102e] transition-colors">careers@talenopia.com</a>
             <div className="mt-2 text-[0.8rem] text-white/45">www.talenopia.com</div>
           </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] pt-6 flex flex-wrap justify-between items-center gap-4">
        <span className="text-[0.68rem] text-white/20 tracking-[0.05em]">
          © {new Date().getFullYear()} Talenopia. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-[0.68rem] text-white/20 hover:text-[#c8102e] transition-colors">Privacy Policy</Link>
          <button onClick={scrollToTop} className="text-[0.68rem] text-[#c8102e] font-bold uppercase tracking-widest hover:text-white transition-colors">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
