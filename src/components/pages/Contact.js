import {AiFillMail} from "react-icons/ai"

function Contact() {
  return (
    <div
      className=" sections mb-0 pb-5"
      id="section4"
    >
      <h2 className="mb-1 font-bold flex justify-start">
        <AiFillMail className="mr-2 mt-1" /> Contact
      </h2>
      <hr></hr>
      <p className="md:mt-5">
        <strong>Phone</strong> : 0531 744 3500
      </p>
      <p>
        <strong>Email</strong> : udk97@hotmail.com
      </p>
      <p>
        <strong>Address</strong> : Ankara/Etimesgut
      </p>
    </div>
  );
}

export default Contact