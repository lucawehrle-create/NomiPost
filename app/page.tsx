import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import LetterAnatomy from "@/components/LetterAnatomy";
import HowItWorks from "@/components/HowItWorks";
import AboutNomi from "@/components/AboutNomi";
import Manifesto from "@/components/Manifesto";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
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
        <Manifesto />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
