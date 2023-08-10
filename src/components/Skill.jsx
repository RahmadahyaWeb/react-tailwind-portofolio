import React from "react";

const Skill = () => {
  const dataFrontend = [
    { skill: "HTML", level: "Expert" },
    { skill: "Bootstrap", level: "Intermediate" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "Tailwind CSS", level: "Basic" },
    { skill: "Javascript", level: "Intermediate" },
    { skill: "React Js", level: "Basic" },
  ];
  const dataBackend = [
    { skill: "PHP", level: "Intermediate" },
    { skill: "Laravel", level: "Intermediate" },
    { skill: "MySQL", level: "Intermediate" },
    { skill: "Codeigniter", level: "Basic" },
    { skill: "Node Js", level: "Basic" },
  ];
  return (
    <section id="skills" className="py-10">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center flex flex-col gap-1 mb-12">
          <h3 className="text-secondary-color text-3xl font-semibold">
            Skills
          </h3>
          <p className="text-main-color text-lg">My current skills</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
          <div className="p-6  bg-main-color rounded-3xl flex flex-col gap-3 transition-all duration-300 hover:shadow-[5px_5px_white] ">
            <h4 className="text-xl font-medium text-center mb-1">
              Frontend Developer
            </h4>
            <div className="grid grid-cols-2 gap-3 mx-auto">
              {dataFrontend.map((frontend) => (
                <div className="flex gap-2" key={frontend.skill}>
                  <i className="ri-medal-line"></i>
                  <div className="flex flex-col ">
                    <h3 className="text-base">{frontend.skill}</h3>
                    <span className="text-xs text-primary-color">
                      {frontend.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6  bg-main-color rounded-3xl flex flex-col gap-3 transition-all duration-300 hover:shadow-[5px_5px_white] ">
            <h4 className="text-xl font-medium text-center mb-1">
              Backend Developer
            </h4>
            <div className="grid grid-cols-2 gap-3 mx-auto">
              {dataBackend.map((backend) => (
                <div className="flex gap-2" key={backend.skill}>
                  <i className="ri-medal-line"></i>
                  <div className="flex flex-col ">
                    <h3 className="text-base">{backend.skill}</h3>
                    <span className="text-xs text-primary-color">
                      {backend.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
