import React from "react";
import profileImage from '../assets/IMG_E0712.JPG';

const Navigation = () => {
  return (
    <>
      <div className="bg-primary px-2 mb-1 text-secondary flex sm:flex-row md:flex-col sm:justify-between md:items-center  sm:py-3.5 md:py-5 sm:border-b border-neutral-700 ">
        <div className="flex lg:justify-center gap-1.5 md:hidden">
          <img src={profileImage} alt="" className="w-12 h-12 rounded-full" />
          <div>
            <h1>Martins Owuama</h1>
            <p>Frontend developer</p>
          </div>
        </div>
        <div className="flex md:flex-col-reverse sm:flex-row gap-5.5 sm:text-3xl md:text-2xl">
            <i class="fa-solid fa-sun button"></i>
            <i class="fa-solid fa-bars button"></i>
        </div>
      </div>
    </>
  );
};

export default Navigation;
