import React from 'react'
import Navbar from "./Navbar";

function AboutMe() {
  return (
    <div className="bg-white p-5">
      <h1 className="font-bold font-sans text-7xl mb-20 mt-20">Hello</h1>
      <div className="flex justify-center mb-36 mt-36">
        <div className=" text-lg  w-auto pl-10 pr-10 tracking-widest text-justify">
          <h2 className="mb-1 font-bold">About me</h2>
          <hr/>
          <p>
            I graduated from the Hacettepe University Mining department in
            August 2021. I worked for eight months as an Underground Mining
            Engineer. Meanwhile, I decided to change my profession to being Web
            Developer. I am trying to improve myself in the field of Web
            Development for a year.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe