"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Spring physics for the ring
  const ringX = useSpring(0, { damping: 20, stiffness: 150, mass: 0.8 });
  const ringY = useSpring(0, { damping: 20, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      ringX.set(clientX - 18);
      ringY.set(clientY - 18);
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, [ringX, ringY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#c8102e] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-[#c8102e]/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
    </>
  );
}
