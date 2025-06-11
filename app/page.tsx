import About from "./components/About";
import Hero from "./components/Hero";
import LetsTalk from "./components/LetsTalk";
import Portfolio from "./components/Portfolio";
import ProcessShowcase from "./components/ProcessShowcase";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProcessShowcase />
      <Portfolio />
      <Testimonials />
      <LetsTalk />
    </>
  );
}
