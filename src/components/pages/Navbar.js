import {BsFillArrowDownSquareFill} from "react-icons/bs"

function Navbar() {
  return (
    <div className="mb-5 mt-5 flex justify-between ">
      <div className="ml-6 font-bold ">
        <a className="flex justify-center" href="#" target={"_blank"}><BsFillArrowDownSquareFill className="mt-0 mr-2 w-6 h-6"/> CV </a>
      </div>
      <div>
        <a href="#" className="mr-6 font-bold">
          Experience
        </a>
        <a href="#" className="mr-6 font-bold">
          Projects
        </a>
        <a href="#" className="mr-6 font-bold">
          Skills
        </a>
        <a href="#" className="mr-6 font-bold">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar