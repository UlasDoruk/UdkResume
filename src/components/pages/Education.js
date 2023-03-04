import { FaBook } from "react-icons/fa";

function Education() {
  const edu = [
    {
      name: "Hacetepe University",
      section: "Information Systems / Master Degree",
      date: "October 2022 - Now",
      mark: "GPA : 3.38",
    },
    {
      name: "Kodluyoruz",
      section: "İstanbul Front-End React.js Bootcamp",
      date: "Jun 2022 – Aug 2022",
      mark: "",
    },
    {
      name: "Hacetepe University",
      section: "Mining Engineering / Undergraduate",
      date: "September 2015 - Agust 2021",
      mark: "GPA : 2.82",
    },
  ];

  return (
    <div className=" sections mt-0" id="section0.5">
      <h2 className="mb-1 font-bold flex justify-start">
        <FaBook className="mr-2 mt-1" /> Education
      </h2>
      <hr></hr>
      {edu.map((item, index) => {
        return (
          <div className="mt-5" key={index}>
            <h1 className="font-bold">{item.name}</h1>
            <h2>{item.section}</h2>
            <h2>{item.date}</h2>
            <p> {item.mark}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
