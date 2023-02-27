import React from "react";
import Navbar from "./Navbar";

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex justify-center  lg:flex-wrap ">
          <div className="rounded  h-max w-max mt-36 md:flex md:justify-center ">
            <div className="bg-sky-100 ">
              <img
                className="sm:w-60 sm:h-60 w-36 h-36 rounded-full m-10 shadow-2xl "
                src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
              ></img>
              <h2 className="shortCardText mt-5">Ulaş Doruk Karaman</h2>
              <h3 className="shortCardText  mb-5">Jr.Web Developer</h3>
              <footer className="bg-white">
                <div className="p-2 flex justify-around ">
                  <FiGithub className="w-7 h-7" />
                  <FaLinkedinIn className="w-7 h-7" />
                  <FiInstagram className="w-7 h-7" />
                </div>
              </footer>
            </div>
            <div className="bg-white ">
              <h1 className="font-bold font-sans text-7xl ml-20 mr-20 mt-5">
                Hello
              </h1>
              <h2 className="font-bold font-sans mt-5 sm:text-2xl">
                Here's who I am & what I do
              </h2>
              <span className="font-bold w-64 m-10 flex justify-around text-justify">
                I graduated from the Hacettepe University Mining Engineering
                department in August 2021. I worked for eight months as an
                Underground Mining Engineer. Besides, ı am trying to improve
                myself in the field of Web Development on my own.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
