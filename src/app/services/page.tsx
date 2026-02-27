import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Talenopia's resource augmentation services — IT staffing, non-IT augmentation, specialized talent, and flexible engagement models for enterprises and growing businesses.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
