"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[var(--nav-h)] flex items-center justify-between px-[5%] transition-all duration-300 border-b border-black/5",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <polygon
                points="50,6 90,90 10,90"
                stroke="#0a0a0a"
                strokeWidth="8"
                fill="none"
                strokeLinejoin="round"
              />
              <line
                x1="28"
                y1="65"
                x2="72"
                y2="65"
                stroke="#0a0a0a"
                strokeWidth="8"
                strokeLinecap="square"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[1.4rem] tracking-[0.06em] text-black">
              TALENOPIA
            </span>
            <small className="text-[0.38rem] font-bold tracking-[0.28em] text-[#c8102e] uppercase mt-[2px]">
              Utopia of Talent Sourcing
            </small>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[0.76rem] font-bold tracking-[0.08em] uppercase text-[#1a1917] relative pb-1 transition-colors duration-200 hover:text-[#c8102e]",
                    pathname === link.href && "text-[#c8102e]"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] bg-[#c8102e] transition-all duration-300 ease-in-out",
                      pathname === link.href ? "width-full" : "w-0 hover:w-full"
                    )}
                    style={{
                      width: pathname === link.href ? "100%" : undefined,
                    }}
                  />
                  {/* Hover effect purely via CSS group-hover or just hover psuedo */}
                  <style jsx>{`
                    a:hover span {
                      width: 100%;
                    }
                  `}</style>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-black text-white px-5 py-2.5 text-[0.76rem] font-bold tracking-[0.1em] uppercase hover:bg-[#c8102e] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block w-[22px] h-[1.5px] bg-black" />
              <span className="block w-[22px] h-[1.5px] bg-black" />
              <span className="block w-[22px] h-[1.5px] bg-black" />
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[var(--nav-h)] left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 md:hidden z-40"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#c8102e]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#c8102e] text-white text-center py-3 text-sm font-bold uppercase tracking-widest mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
