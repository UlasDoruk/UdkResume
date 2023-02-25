import { Link } from 'react-router-dom'
import {BsPersonSquare} from "react-icons/bs"

function Navbar() {
  return (
    <div className="bg-amber-100 p-4 flex justify-between ">
      <Link to="/" className="flex justify-center m-2">
        <BsPersonSquare className="w-10 h-10" />
        <h1 className="text-zinc-900 font-bold text-2xl font-mono ml-6 mt-1">
          {"Ulaş Doruk Karaman"}
        </h1>
      </Link>
      <div className="flex justify-around mr-10 ">
        <Link to="/resume" className="m-2">
          <button className="btn">Resume</button>
        </Link>
        <Link to="/projects" className="m-2">
          <button className="btn">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar