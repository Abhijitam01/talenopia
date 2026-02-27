import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with Talenopia. Explore IT and non-IT opportunities, enterprise exposure, and performance-based growth. Send your profile to careers@talenopia.com.",
};

export default function CareersPage() {
  return <CareersClient />;
}
