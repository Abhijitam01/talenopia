import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Talenopia — a modern resource augmentation company helping enterprises and growing businesses scale with confidence through hyper-specialized IT and non-IT professionals.",
};

export default function AboutPage() {
  return <AboutClient />;
}
