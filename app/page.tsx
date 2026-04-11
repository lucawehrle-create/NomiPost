import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import LetterAnatomy from "@/components/LetterAnatomy";
import HowItWorks from "@/components/HowItWorks";
import AboutNomi from "@/components/AboutNomi";
import WaitlistSection from "@/components/WaitlistSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Promises />
        <LetterAnatomy />
        <HowItWorks />
        <AboutNomi />
        <WaitlistSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
