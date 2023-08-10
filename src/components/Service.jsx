import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "Web Design",
  },
  {
    id: 3,
    title: "Wedding Invitation",
  },
];

const Service = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-10">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center flex flex-col gap-1 mb-12">
          <h3 className="text-secondary-color text-3xl font-semibold">
            Services
          </h3>
          <p className="text-main-color text-lg">What i offer</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              className="p-6 rounded-3xl gap-3 bg-main-color text-center flex flex-col justify-center items-center hover:shadow-[5px_5px_white] transition-all duration-300"
              key={service.id}
            >
              <i className="ri-code-s-slash-line text-4xl "></i>
              <h4 className="text-xl font-medium text-center mb-1">
                {service.title}
              </h4>

              <button
                className="px-7 py-3 bg-primary-color text-secondary-color hover:bg-primary-color/90 transition-colors rounded-3xl cursor-pointer w-1/2"
                onClick={() => setActive(service.id)}
              >
                Detail
              </button>

              {/* Modal */}
              <div
                className={
                  active === service.id
                    ? "opacity-1 visible fixed top-0 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-md flex justify-center items-center p-4 transition z-50"
                    : "opacity-0 invisible fixed top-0 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-md flex justify-center items-center p-4 transition z-50"
                }
              >
                <div className="w-96 relative bg-secondary-color p-12 rounded-3xl">
                  <div
                    className="absolute top-3 right-5 text-4xl cursor-pointer"
                    onClick={() => setActive(0)}
                  >
                    &times;
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">
                    {service.title}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    exercitationem fuga earum velit similique soluta iusto
                    delectus fugiat sit eos?
                  </p>
                </div>
                {/* End Modal */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
