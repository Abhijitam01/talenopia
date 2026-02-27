"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Globally attaches an IntersectionObserver to trigger .reveal → .visible
 * on every page. This must be a Client Component to use useEffect.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const activate = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
      );

      const revealEls = document.querySelectorAll(".reveal:not(.visible)");
      revealEls.forEach((el) => observer.observe(el));

      return observer;
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observer = activate();
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
