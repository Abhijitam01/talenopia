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

/**
 * The Talenopia logo mark, exactly matching the brand logo:
 * An angular bold "A" / "T" shape with rectangular notches cut from each leg.
 *
 * Uses SVG evenodd fill-rule so the notch cutouts are transparent
 * and show the background — works on any background color.
 */
function LogoMark({ size, color }: { size: number; color: string }) {
  /*
   * The shape is built as a single compound path:
   *  1. Outer A shape (clockwise)
   *  2. Left notch cutout (counter-clockwise) — creates transparent hole
   *  3. Right notch cutout (counter-clockwise) — creates transparent hole
   *
   * With fill-rule="evenodd", the cutouts punch through the filled A.
   *
   * Coordinates (viewBox 0 0 100 110):
   *   - Peak at (50, 5)
   *   - Base spans from (4, 106) to (96, 106)
   *   - Leg thickness ~17 units
   *   - Cutout slots at ~68–84% height through each leg
   */
  const d = [
    // Outer A — clockwise
    "M50 5 L96 106 H79 L50 42 L21 106 H4 L50 5Z",
    // Left leg notch — counter-clockwise (creates hole)
    "M19 74 L34 74 L41 89 L26 89Z",
    // Right leg notch — counter-clockwise
    "M81 74 L66 74 L59 89 L74 89Z",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d={d} fill={color} fillRule="evenodd" />
    </svg>
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
