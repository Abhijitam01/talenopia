import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Talenopia. Whether you're looking to scale your team, explore augmentation options, or discuss specific requirements — we're here to help.",
};

export default function ContactPage() {
  return <ContactClient />;
}
