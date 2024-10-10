import Hero from "./components/hero";
import Skill from "./components/skill";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
