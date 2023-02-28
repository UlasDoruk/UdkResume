import {BsFillArrowDownSquareFill} from "react-icons/bs"

function Navbar() {
  return (
    <>
      <div className="mb-5 sm:p-2 flex justify-center sm:justify-between sticky top-0 bg-white  border-b-gray-200 border flex-wrap">
      
          <form
            className="ml-6 font-bold pr-3 pt-1 pb-1 "
            method="get"
            action="assets/Ulaş_Doruk KaramanResume.pdf"
            target="_blank"
          >
            <button
              type="submit"
              className="rounded bg-blue-600 text-white pl-2 pr-2 mr-2 mt-2 sm:mt-0 sm:pt-1 sm:pb-1"
            >
              <a
                className="flex justify-center font-thin md:font-bold"
                target={"_blank"}
              >
                <BsFillArrowDownSquareFill className="mt-1 sm:mt-0 mr-2 md:w-6 md:h-6" />
                CV
              </a>
            </button>
          </form>

        <div className="flex flex-wrap mt-1 mb-1">
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