"use client";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BiologicalSection from "@/components/BiologicalSection";
import StructuralSection from "@/components/StructuralSection";
import SacredSection from "@/components/SacredSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <BiologicalSection />
      <StructuralSection />
      <SacredSection />
      <Footer />
    </main>
  );
}
