import {BsFillArrowDownSquareFill} from "react-icons/bs"

function Navbar() {
  return (
    <>
      <div className="mb-5 p-2 flex justify-between sticky top-0 bg-white  border-b-gray-200 border">
        <div className="ml-6 font-bold ">
          <button className="rounded bg-blue-600 text-white pl-2 pr-2 pt-1 pb-1">
            <a className="flex justify-center" href="#" target={"_blank"}>
              <BsFillArrowDownSquareFill className="mt-0 mr-2 w-6 h-6" /> CV
            </a>
          </button>
        </div>
        <div>
          <a href="#section1" className="aTag">
            Experience
          </a>
          <a href="#section2" className="aTag">
            Projects
          </a>
          <a href="#section3" className="aTag">
            Skills
          </a>
          <a href="#section4" className="aTag">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar