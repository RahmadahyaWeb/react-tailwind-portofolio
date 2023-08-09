import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-10 w-full overflow-hidden z-50">
      <div className="container mx-auto p-6 lg:p-2">
        <div className="w-full bg-secondary-color/20 h-16 lg:h-20 max-w-md mx-auto backdrop-blur-lg rounded-full px-8 flex justify-between items-center text-2xl lg:text-3xl text-secondary-color ">
          <a
            href="#"
            className="flex items-center justify-center hover:text-primary-color transition-all ease-in-out w-10 h-10"
          >
            <i class="ri-home-7-line "></i>
          </a>
          <a
            href="#about"
            className="flex items-center justify-center hover:text-primary-color transition-all ease-in-out w-10 h-10"
          >
            <i class="ri-contacts-line"></i>
          </a>
          <a
            href="#skills"
            className="flex items-center justify-center hover:text-primary-color transition-all ease-in-out w-10 h-10"
          >
            <i class="ri-file-copy-2-fill"></i>
          </a>
          <a
            href="#"
            className="flex items-center justify-center hover:text-primary-color transition-all ease-in-out w-10 h-10"
          >
            <i class="ri-mail-send-line"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
