import AboutMe from "./pages/AboutMe";
import Experience from "../components/pages/Experience"
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";
import Navbar from "./pages/Navbar";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

function Right() {
  return (
    <aside className=" h-max md:w-1/2 w-screen bg-white">
      <Navbar />
      <AboutMe />
      <Experience />
      <Education/>
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </aside>
  );
}

export default Right