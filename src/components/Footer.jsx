import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="pt-10 px-10 pb-32 lg:pb-44 border-t border-solid border-black/10">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-main-color font-medium text-3xl">Rahmadahya</h1>
          <div className="flex gap-3">
            <div className="bg-main-color text-primary-color rounded-full w-10 h-10 flex justify-center items-center hover:text-primary-color hover:bg-secondary-color transition-all">
              <a className="text-2xl flex justify-center items-center">
                <i className="ri-github-line"></i>
              </a>
            </div>
            <div className="bg-main-color text-primary-color rounded-full w-10 h-10 flex justify-center items-center hover:text-primary-color hover:bg-secondary-color transition-all">
              <a className="text-2xl flex justify-center items-center">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
            <div className="bg-main-color text-primary-color rounded-full w-10 h-10 flex justify-center items-center hover:text-primary-color hover:bg-secondary-color transition-all">
              <a className="text-2xl flex justify-center items-center">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
