"use client";

import Link from "next/link";

interface TalenopiaLogoProps {
  /** Size of the icon mark in pixels */
  iconSize?: number;
  /** Color scheme: "dark" = black icon (for light bg), "light" = white icon (for dark bg) */
  variant?: "dark" | "light";
  /** Whether to wrap in a Link */
  asLink?: boolean;
  /** Gap between icon and text */
  gap?: number;
  /** If true, render just the icon mark */
  iconOnly?: boolean;
}

import Image from "next/image";

function LogoMark({ size, color }: { size: number; color: string }) {
  // Use the provided logo image instead of the SVG graphic 
  return (
    <Image 
      src="/logo.jpg" 
      alt="Talenopia Logo" 
      width={size} 
      height={size} 
      style={{
        borderRadius: size * 0.15, // Add a little rounding
        objectFit: "contain"
      }}
    />
  );
}

export function TalenopiaLogo({
  iconSize = 40,
  variant = "dark",
  asLink = true,
  gap = 10,
  iconOnly = false,
}: TalenopiaLogoProps) {
  const iconColor = variant === "dark" ? "#111113" : "#ffffff";
  const textColor = variant === "dark" ? "#111113" : "#ffffff";
  const taglineColor = "#C41E1E";

  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <LogoMark size={iconSize} color={iconColor} />
      {!iconOnly && (
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: 3 }}>
          <span
            style={{
              fontFamily: "var(--font-barlow-condensed, 'Barlow Condensed', sans-serif)",
              fontSize: "1.3rem",
              fontWeight: 900,
              letterSpacing: "0.08em",
              color: textColor,
              textTransform: "uppercase" as const,
            }}
          >
            TALENOPIA
          </span>
          <span
            style={{
              fontSize: "0.42rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: taglineColor,
              textTransform: "uppercase" as const,
            }}
          >
            Utopia of Talent Sourcing
          </span>
        </span>
      )}
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" style={{ textDecoration: "none" }}>
        {inner}
      </Link>
    );
  }

  return inner;
}

export { LogoMark };
