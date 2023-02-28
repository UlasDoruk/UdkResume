import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Left() {
  return (
    <aside className="flex h-max w-1/2 justify-center  sticky top-0">
      <div className="bg-slate-200 mt-36">
        <img
          className="sm:w-80 sm:h-80 w-36 h-36 rounded-full m-10 inline "
          src="img/Vesikalık.jpg"
        ></img>
        <h2 className="shortCardText mt-5">Ulaş Doruk Karaman</h2>
        <h3 className="shortCardText  mb-5">Jr.Web Developer</h3>
        <footer className="bg-white">
          <div className="p-2 flex justify-around ">
            <a href="https://github.com/UlasDoruk" target={"_blank"}>
              <FiGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/karamanulas/"
              target={"_blank"}
            >
              <FaLinkedinIn className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/hermes_udk/" target={"_blank"}>
              <FiInstagram className="w-7 h-7" />
            </a>
          </div>
        </footer>
      </div>
    </aside>
  );
}

export default Left;
