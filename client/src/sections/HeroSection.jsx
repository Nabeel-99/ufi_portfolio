import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-10 bg-img z-0 relative ">
      <div className="inset-0 absolute bg-black opacity-60" />
      <div className=" 2xl:container  overflow-hidden  2xl:mx-auto">
        <div className="absolute  text-white text-left flex flex-col  gap-6 pt-32 lg:pt-20 px-10 lg:px-20 h-full  w-full 2xl:w-auto">
          <p className="font-satoshi-bold text-5xl lg:text-7xl">
            Fusion Energy <span className="block">Solutions</span>
          </p>
          <p className="lg:w-1/3 font-sans font-bold">
            {" "}
            Empowering communities and businesses with innovative solar energy
            solutions, driving sustainability, reducing energy costs, and
            shaping a brighter future.
          </p>
          <div className="flex flex-col xl:items-center gap-6 xl:flex-row xl:w-1/3">
            <Link
              to={"/services"}
              className="border border-[#dca26c] p-2 lg:py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] text-white w-full lg:w-1/2 text-center rounded-xl"
            >
              Explore Services
            </Link>
            <Link
              to={"/contact"}
              className="border border-[#dca26c] p-2 lg:py-4 font-satoshi-bold lg:text-xl bg-[#d4863e] text-white w-full lg:w-1/2 text-center rounded-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
