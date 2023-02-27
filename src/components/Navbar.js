import { Link } from 'react-router-dom'
import { IoPersonSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-amber-100 p-4  justify-center lg:justify-between flex stickt top-0 ">
      <Link to="/" className=" justify-center m-2 hidden lg:flex">
        <IoPersonSharp className="w-10 h-10" />
        <h1 className="font-bold text-2xl font-mono ml-6 mt-1 ">
          {"Ulaş Doruk Karaman / Jr.Web Developer"}
        </h1>
      </Link>
      <div className="flex justify-around md:mr-10 ">
        <Link to="/" className="m-2">
          <button className="btn">About Me</button>
        </Link>
        <Link to="/resume" className="m-2">
          <button className="btn">Resume</button>
        </Link>
        <Link to="/projects " className="m-2">
          <button className="btn">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar