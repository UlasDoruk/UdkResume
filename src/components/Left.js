import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Left() {
  return (
    <div className="flex h-max w-1/2 justify-center  sticky left-0">
      <div className="bg-slate-200 mt-36">
        <img
          className="sm:w-96 sm:h-96 w-36 h-36 rounded-full m-10 inline "
          src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
        ></img>
        <h2 className="shortCardText mt-5">Ulaş Doruk Karaman</h2>
        <h3 className="shortCardText  mb-5">Jr.Web Developer</h3>
        <footer className="bg-white">
          <div className="p-2 flex justify-around ">
            <a href="#">
              <FiGithub className="w-7 h-7" />
            </a>
            <a href="#">
              <FaLinkedinIn className="w-7 h-7" />
            </a>
            <a href="#">
              <FiInstagram className="w-7 h-7" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Left;
