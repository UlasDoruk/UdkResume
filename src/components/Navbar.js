
function Navbar() {
  return (
    <div className="mb-5 flex justify-between ">
      <div className="ml-6 font-bold">
        <a href="#">CV</a>
      </div>
      <div>
        <a href="#" className="mr-6 font-bold">
          Experience
        </a>
        <a href="#" className="mr-6 font-bold">
          Projects
        </a>
        <a href="#" className="mr-6 font-bold">Contact</a>
      </div>
    </div>
  );
}

export default Navbar