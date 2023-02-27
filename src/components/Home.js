import React from "react";
import Navbar from "./Navbar";

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Home() {
  return (
    <div className="flex justify-center">
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
      <div className=" h-screen w-1/2  bg-white">
        <div className="bg-white p-5">
          <Navbar />
          <hr></hr>
          <h1 className="font-bold font-sans text-7xl m-20 mb-5">Hello</h1>
          {/* <h3 className="font-bold font-sans sm:text-xl mb-10">
            Here's who I am & what I do
          </h3> */}
          <div className="flex ml-20 justify-center">
            <p className=" w-64 text-justify">
              I graduated from the Hacettepe University Mining department in
              August 2021. I worked for eight months as an Underground Mining
              Engineer. Meanwhile, I decided to change my profession to being
              Web Developer. I am trying to improve myself in the field of Web
              Development for a year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
