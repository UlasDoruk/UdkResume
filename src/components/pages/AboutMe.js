import {BsPersonCircle} from "react-icons/bs"
import {AiFillCar} from "react-icons/ai"
import {BsFillShieldFill} from "react-icons/bs"

function AboutMe() {
  return (
    <div className="bg-white ">
      <div className="flex justify-center mt-0 md:mt-14">
        <div className="sections">
          <h2 className="mb-1 font-bold flex justify-start">
            <BsPersonCircle className="mr-2 mt-1" />
            About me
          </h2>
          <hr />
          <p className="mt-5">
            I graduated from the Hacettepe University Mining department in
            August 2021. I worked for eight months as an Underground Mining
            Engineer. Meanwhile, I decided to change my profession to being Web
            Developer. I am trying to improve myself in the field of Web
            Development for a year.
          </p>
          <p className="mt-5 flex">
            <strong className="flex justify-start">
              <AiFillCar className="mr-2 mt-1" /> Driver license
            </strong>
            : B
          </p>
          <p className="mt-5 flex">
            <strong className="flex justify-start">
              <BsFillShieldFill className="mr-2 mt-1" /> Military Service
            </strong>
            : 02.2024 (Postponed)
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe