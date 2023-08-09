import React from "react";
import AboutImg from "../assets/img/profile.svg";

const data = [
  {
    icon: "ri-award-fill",
    title: "Experience",
    subtitle: "1 years of freelancing",
  },
  {
    icon: "ri-file-list-2-line",
    title: "Completed",
    subtitle: "More than 10 projects",
  },
  {
    icon: "ri-customer-service-2-fill",
    title: "Support",
    subtitle: "Online 24/7",
  },
];

const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="container px-6 mx-auto">
        <div className="text-center flex flex-col gap-1 mb-12">
          <h3 className="text-secondary-color text-3xl font-semibold">About</h3>
          <p className="text-main-color text-lg">Let me introduce myself</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 text-center lg:text-left">
          <img src={AboutImg} alt="AboutImg" />
          <div>
            <div className="grid grid-cols-3 mb-6 gap-2">
              {data.map((data) => (
                <div className="bg-main-color text-center rounded-3xl">
                  <div className="py-4 lg:py-6">
                    <i class={`${data.icon} text-xl lg:text-3xl`}></i>
                    <div className="text-primary-color">
                      <p className="text-sm lg:text-base font-medium lg:my-1">
                        {data.title}
                      </p>
                      <p className="text-xs lg:text-sm">{data.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base text-center lg:text-left text-main-color mb-9">
              I am a student majoring in Informatics Engineering at Politeknik
              Negeri Banjarmasin. Ever since I was young, I have been fascinated
              by the world of technology and computers. This passion has driven
              me to pursue education in this field. I thoroughly enjoy learning
              about programming, website development, and the latest
              technologies.
            </p>
            <a className="px-7 py-3 bg-secondary-color text-primary-color hover:bg-secondary-color/90 transition-colors rounded-full my-5 text-2xl font-semibold cursor-pointer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
