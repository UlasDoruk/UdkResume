import { IoNewspaperSharp } from "react-icons/io5";

function Certificates () {

  const certificates = [
    {
      name: "İstanbul Front-End Bootcamp",
      link: "https://verified.sertifier.com/en/verify/53539883771989",
      text: "Web Development,HTML,CSS, JavaScript, React.js",
    },
    {
      name: "JavaScript",
      link: "https://www.hackerrank.com/certificates/19ee16119ff5",
      text: "Basic",
    },
    {
      name: "Problem Solving",
      link: "https://www.hackerrank.com/certificates/55b96c76fbef",
      text: "Basic",
    },
  ];

  return (
    <div className=" sections">
      <h2 className="mb-1 font-bold flex justify-start">
        <IoNewspaperSharp className="mr-2 mt-1" /> Certificates
      </h2>
      <hr></hr>
      {certificates.map((item, index) => {
        return (
          <div className="mt-5" key={index}>
            <a
              target={"_blank"}
              className="font-semibold underline"
              href={item.link}
            >
              {item.name}
            </a>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Certificates;