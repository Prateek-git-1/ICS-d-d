import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { Services } from "@/components/layout/Services";
import ProjectCard from "@/components/layout/ProjectCard";
import Footer from "@/components/layout/Footer";
import { CTA } from "@/components/layout/CTA";
import TestimonialCard from "@/components/layout/TestimonialCard";
import FAQ from "@/components/layout/FAQ";


export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* hero */}
      <Hero/>
      {/* header */}
      <Services/>
      {/* Project container */}
      <ProjectCard/>
      {/* Testimonial */}
      <TestimonialCard/>
      {/* CTA */}
      <FAQ/>
      {/* CTA */}
      <CTA/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

