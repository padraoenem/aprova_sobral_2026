import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import Pillars from "./_components/Pillars";
import Platform from "./_components/Platform";
import HowItWorks from "./_components/HowItWorks";
import FinalCta from "./_components/FinalCta";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Marquee />
        <Pillars />
        <Platform />
        <HowItWorks />
        <FinalCta />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
