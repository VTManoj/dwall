
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Testimonials from "./components/Testimonial";
import HighlightSection from "./components/Hightlight";
import About from "./components/about";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HighlightSection />
      <Projects />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
