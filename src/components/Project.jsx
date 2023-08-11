import React, { useEffect, useState } from "react";
import Sisami from "../assets/img/sisami.png";
import Portofolio from "../assets/img/portofolio.png";

const navButton = [{ name: "All" }, { name: "Laravel" }, { name: "React" }];

const items = [
  {
    id: 1,
    image: Portofolio,
    title: "Personal Portofolio",
    category: "React",
    link: "https://rahmadahyaweb.github.io/react-portofolio/",
    github: "https://github.com/RahmadahyaWeb/react-portofolio",
  },
  {
    id: 2,
    image: Sisami,
    title: "Alumni Information System",
    category: "Laravel",
    link: "https://sisami.cloud",
    github: "https://github.com/RahmadahyaWeb/alumni-information-system",
  },
];

const Project = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(items);
    } else {
      const newProjects = items.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <section id="projects" className="py-10">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center flex flex-col gap-1 mb-12">
          <h3 className="text-secondary-color text-3xl font-semibold">
            Projects
          </h3>
          <p className="text-main-color text-lg">My recent projects</p>
        </div>
        <div className="flex justify-center mb-6 gap-2">
          {navButton.map((nav, index) => (
            <button
              className={`${
                active === index ? "bg-main-color text-primary-color" : ""
              } px-7 py-3 text-main-color transition-colors rounded-3xl cursor-pointer text-lg hover:bg-main-color hover:text-primary-color`}
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {nav.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((item) => (
            <ProjectItems item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItems = ({ item }) => {
  return (
    <div className="p-3 bg-main-color rounded-3xl flex flex-col gap-3">
      <img src={item.image} alt={item.image} className="rounded-3xl" />
      <h3 className="text-lg font-medium text-primary-color">{item.title}</h3>
      <div className="flex gap-3 justify-end">
        <div className="bg-primary-color text-main-color rounded-full w-10 h-10 flex justify-center items-center hover:text-primary-color hover:bg-secondary-color transition-all">
          <a href={item.link} className="flex justify-center items-center">
            <i className="text-2xl ri-eye-2-fill"></i>
          </a>
        </div>
        <div className="bg-primary-color text-main-color rounded-full w-10 h-10 flex justify-center items-center hover:text-primary-color hover:bg-secondary-color transition-all">
          <a
            href={item.github}
            className="text-2xl flex justify-center items-center"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
