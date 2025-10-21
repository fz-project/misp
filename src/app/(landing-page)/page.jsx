import Hero from "@/components/Hero";
import About from "@/components/About";
import News from "@/components/News";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Locations />
      {/* Di Nonaktifkan dlu */}
      {/* <News />  */}
      <Contact />
      <Footer />
    </>
  );
}
