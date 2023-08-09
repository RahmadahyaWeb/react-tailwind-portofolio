import React from "react";
import HeroImg from "../assets/img/profile.svg";
import AboutImg from "../assets/img/about.svg";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-6  text-secondary-color">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div className="flex flex-1 justify-center lg:justify-center order-last lg:order-first ">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold m-0 p-0">
                Rahmadahya
              </h1>
              <p className="py-5  text-main-color  ">Laravel Addict</p>
              <p className="text-main-color mb-9  ">
                I'm Web Developer Who Hates Javascript.
              </p>
              <a className="px-7 py-3 bg-secondary-color text-primary-color hover:bg-secondary-color/90 transition-colors rounded-full my-5  cursor-pointer">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img src={AboutImg} alt="" className="w-10/12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
