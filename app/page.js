import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <div id="hero">
        <Hero />

      </div>
      <div id="about">
        <About />

      </div>
      <div id="projects">

        <Projects />
      </div>
      <Footer />
    </div>
  );
}
