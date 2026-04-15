import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import LetterAnatomy from "@/components/LetterAnatomy";
import TheJourney from "@/components/TheJourney";
import HowItWorks from "@/components/HowItWorks";
import AboutNomi from "@/components/AboutNomi";
import Manifesto from "@/components/Manifesto";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full max-w-[100vw]">
      <Navigation />
      <main>
        <Hero />
        <Promises />
        <LetterAnatomy />
        <TheJourney />
        <HowItWorks />
        <AboutNomi />
        <Manifesto />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
