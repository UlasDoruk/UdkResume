import {TbCertificate} from "react-icons/tb"

function Certificates () {
  return (
    <div className=" text-lg  pl-14 pr-14 tracking-widest text-justify mb-36">
      <h2 className="mb-1 font-bold flex justify-start">
        <TbCertificate className="mr-2 mt-1" /> Certificates
      </h2>
      <hr></hr>
      <ul>
        <li className="mt-5">
          <a
            target={"_blank"}
            className="font-semibold underline"
            href="https://verified.sertifier.com/en/verify/53539883771989"
          >
            İstanbul Front-End Bootcamp
          </a>
          <p>
            <ul>
              <li>Web Development</li>
              <li>HTML,CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </p>
        </li>
        <li className="mt-5">
          <a
            target={"_blank"}
            className="font-semibold underline"
            href="https://www.hackerrank.com/certificates/19ee16119ff5"
          >
            JavaScript
          </a>
          <p>Basic</p>
        </li>
        <li className="mt-5">
          <a
            target={"_blank"}
            className="font-semibold underline"
            href="https://www.hackerrank.com/certificates/55b96c76fbef"
          >
            Problem Solving
          </a>
          <p>Basic</p>
        </li>
      </ul>
    </div>
  );
}

export default Certificates;