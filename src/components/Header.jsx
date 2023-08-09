import React from "react";

const Header = () => {
  return (
    <header className="py-6 lg:pt-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center text-secondary-color font-normal text-lg lg:text-2xl">
          <a href="#">Rahmadahya</a>
          <div className="flex gap-3 lg:gap-6">
            <a href="" className="text-5xl">
              <i class="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
