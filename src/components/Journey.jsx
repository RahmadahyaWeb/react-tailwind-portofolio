import React, { useState } from "react";

const Journey = () => {
  const [active, setActive] = useState(1);
  return (
    <section id="skills" className="py-10">
      <div className="container px-6 mx-auto max-w-xl">
        <div className="text-center flex flex-col gap-1 mb-12">
          <h3 className="text-secondary-color text-3xl font-semibold">
            Qualification
          </h3>
          <p className="text-main-color text-lg">My personal journey</p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-5 gap-2">
          <div>
            <button
              className={
                active === 1
                  ? "px-7 py-3 bg-main-color text-primary-color transition-colors rounded-3xl cursor-pointer text-lg"
                  : "px-7 py-3 text-main-color transition-colors rounded-3xl cursor-pointer text-lg hover:bg-main-color hover:text-primary-color"
              }
              onClick={() => setActive(1)}
            >
              Education
            </button>
          </div>
          <div>
            <button
              className={
                active === 2
                  ? "px-7 py-3 bg-main-color text-primary-color transition-colors rounded-3xl cursor-pointer text-lg"
                  : "px-7 py-3 text-main-color transition-colors rounded-3xl cursor-pointer text-lg hover:bg-main-color hover:text-primary-color"
              }
              onClick={() => setActive(2)}
            >
              Experience
            </button>
          </div>
        </div>
        {/* Section Education*/}
        <div className={active === 1 ? "block" : "hidden"}>
          <div className="mx-auto w-full grid grid-cols-9 gap-3 lg:gap-0">
            <div className="col-span-4">
              <div className="flex flex-col gap-2 text-main-color">
                <h3 className="font-medium text-base">
                  Computer and Informatics Engineering
                </h3>
                <p className="text-sm">Telkom High School</p>
                <p className="text-sm">2018 - 2021</p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-main-color"></div>
              <div className="absolute w-4 h-4 rounded-full bg-main-color"></div>
            </div>
            <div className="col-span-4 w-full h-full"></div>
          </div>
          <div className="mx-auto w-full grid grid-cols-9 gap-3 lg:gap-0">
            <div className="col-span-4 w-full h-full"></div>

            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-main-color"></div>
              <div className="absolute w-4 h-4 rounded-full bg-main-color"></div>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col gap-2 text-main-color">
                <h3 className="font-medium text-base">
                  Informatics Engineering
                </h3>
                <p className="text-sm">Politeknik Negeri Banjarmasin</p>
                <p className="text-sm">2021 - Present</p>
              </div>
            </div>
          </div>
        </div>
        {/* Section Experience*/}
        <div className={active === 2 ? "block" : "hidden"}>
          <div className="mx-auto w-full grid grid-cols-9 gap-3 lg:gap-0">
            <div className="col-span-4">
              <div className="flex flex-col gap-2 text-main-color">
                <h3 className="font-medium text-base">Junior Web Developer</h3>
                <p className="text-sm">VSGA</p>
                <p className="text-sm">2022</p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-main-color"></div>
              <div className="absolute w-4 h-4 rounded-full bg-main-color"></div>
            </div>
            <div className="col-span-4 w-full h-full"></div>
          </div>
          <div className="mx-auto w-full grid grid-cols-9 gap-3 lg:gap-0">
            <div className="col-span-4 w-full h-full"></div>

            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-main-color"></div>
              <div className="absolute w-4 h-4 rounded-full bg-main-color"></div>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col gap-2 text-main-color">
                <h3 className="font-medium text-base">
                  Freelance Web Developer
                </h3>
                <p className="text-sm">RahmadahyaWeb</p>
                <p className="text-sm">2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
