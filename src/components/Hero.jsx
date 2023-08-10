import React, { useEffect, useRef } from "react";
import AboutImg from "../assets/img/about.svg";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Laravel Addict"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 400,
      smartBackspace: true,
      // showCursor: true,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section>
      <div className="container mx-auto px-6  text-secondary-color">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div className="flex flex-1 justify-center lg:justify-center order-last lg:order-first ">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold m-0 p-0">
                Rahmadahya
              </h1>
              <p className="py-2 text-main-color text-lg">
                <span ref={el}></span>
              </p>
              <p className="text-main-color pb-7 text-lg">
                I'm Web Developer Who Hates Javascript.
              </p>
              <a className="px-7 py-3 bg-secondary-color text-primary-color hover:bg-secondary-color/90 transition-colors rounded-3xl my-5  cursor-pointer">
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
