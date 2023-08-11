import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("#home");

  return (
    <nav className="fixed bottom-2 lg:bottom-10 w-full overflow-hidden z-50">
      <div className="container mx-auto p-6 lg:p-2">
        <div className="w-full bg-secondary-color/20 h-16 lg:h-20 max-w-md mx-auto backdrop-blur-lg rounded-full px-8 flex justify-between items-center text-2xl lg:text-3xl text-secondary-color ">
          <div
            className={`${
              active === "#home" ? "bg-primary-color" : ""
            } transition-all ease-in-out w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-color`}
            onClick={() => setActive("#home")}
          >
            <a href="#home" className="flex items-center justify-center">
              <i className="ri-home-7-line"></i>
            </a>
          </div>
          <div
            className={`${
              active === "#about" ? "bg-primary-color" : ""
            } transition-all ease-in-out w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-color`}
            onClick={() => setActive("#about")}
          >
            <a href="#about" className="flex items-center justify-center">
              <i className="ri-user-line "></i>
            </a>
          </div>
          <div
            className={`${
              active === "#projects" ? "bg-primary-color" : ""
            } transition-all ease-in-out w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-color`}
            onClick={() => setActive("#projects")}
          >
            <a href="#projects" className="flex items-center justify-center">
              <i className="ri-file-copy-2-line "></i>
            </a>
          </div>
          <div
            className={`transition-all ease-in-out w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-color`}
          >
            <a
              href="mailto: thelastpc24@gmail.com"
              className="flex items-center justify-center"
            >
              <i className="ri-mail-send-line "></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
