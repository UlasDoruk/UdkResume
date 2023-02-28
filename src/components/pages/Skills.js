import {BsMouse2Fill} from "react-icons/bs"

function Skills() {

    const skills = [
      { name: "Java", value: "20", text: "" },
      { name: "Databases", value: "20", text: "Postgres, MongoDB" },
      { name: "MS Office", value: "30", text: "" },
      { name: "HTML, CSS", value: "50", text: "Bootstrap, Tailwindcss" },
      { name: "JavaScript", value: "60", text: "React.js, Redux-toolkit" },
      { name: "Tools", value: "60", text: "GitHub, VSC, Eclipse" },
    ];

  return (
    <div className="sections">
      <h2 className="mb-1 font-bold flex justify-start" id="section3">
        <BsMouse2Fill className="mr-2 mt-1" />
        Skills
      </h2>
      <hr></hr>
      {skills.map((item, index) => {
        return (
          <div className="mt-5 flex flex-col  " key={index}>
            <label htmlFor="file">
              <strong className="mr-2">
                {item.name} %{item.value}
              </strong>
            </label>
            <progress
              id="file"
              max="100"
              className="h-3"
              value={item.value}
            ></progress>
            {item.text && <p>{item.text}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Skills