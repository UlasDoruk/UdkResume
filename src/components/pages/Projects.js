import {GrProjects} from "react-icons/gr"

function Projects() {

  const projects = [
    {
      name: "LotrApp (Lord Of The Rings App)",
      text: "The app displays Lord of the Rings books, movies and all characters.Also their individual pages. (Apı doesn't have any image endpoint.All images added by me)",
      usedTechs: "React, Redux-toolkit, HTML5,CSS3, Bootstrap, VSC",
      link: "https://github.com/UlasDoruk/LortApp",
    },
    {
      name: "WeatherApp",
      text: " Hourly and 5 days weather forecast.",
      usedTechs: "React.js, Redux-toolkit,Tailwindcss, Thunk, Axios, HTML, CSS",
      link: "https://github.com/UlasDoruk/WheatherApp",
    },
    {
      name: "Repaymnet Calculater",
      text: "Users can calculate their own mortgage or tax repayment schedules.",
      usedTechs: "JavaScript, React.js, HTML,CSS, VSC",
      link: "https://github.com/UlasDoruk/Fimple_React_Practicum_Project",
    },
    {
      name: "TicTacToe (XOX)",
      text: "",
      usedTechs: "React.js , JavaScript, HTML, CSS, VSC",
      link: "https://github.com/UlasDoruk/TicTacToe",
    },
  ];

  return (
    <div className=" text-lg  pl-14 pr-14 tracking-widest text-justify mb-36">
      <h2 className="mb-1 font-bold flex justify-start">
        <GrProjects className="mr-2 mt-1" /> Projects
      </h2>
      <hr></hr>
      <ul>
        {projects.map((item, index) => {
          return (
            <li className="mt-5" key={index}>
              <button className="hover:scale-105">
                <a
                  className="font-semibold underline "
                  href={item.link}
                  target={"_blank"}
                >
                  {item.name}
                </a>
              </button>

              {item.text && <p>{item.text}</p>}
              <p className="font-medium">
                Used technologies : {item.usedTechs}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects