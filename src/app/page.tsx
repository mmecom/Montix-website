import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProblemSection from "@/components/ProblemSection";
import BuildSection from "@/components/BuildSection";
import WorkflowSection from "@/components/WorkflowSection";
import CompareSection from "@/components/CompareSection";
import DeliverSection from "@/components/DeliverSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative max-w-[1240px] mx-auto px-5 sm:px-7">
      <Header />
      <Hero />
      <Marquee />
      <ProblemSection />
      <BuildSection />
      <WorkflowSection />
      <CompareSection />
      <DeliverSection />
      <GuaranteeSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
