import AboutMe from "./pages/AboutMe";
import Experience from "../components/pages/Experience"
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";
import Navbar from "./pages/Navbar";

function Right() {
  return (
    <div className=" h-max w-1/2 bg-white">
      <Navbar/>
      <hr></hr>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Right