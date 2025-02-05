import React from "react";
import AccordionCard from "../components/AccordionCard";
import FadeInEffect from "../components/FadeInEffect";

const FrequentlyAskedSection = () => {
  return (
    <FadeInEffect translateY={10}>
      <div className="flex flex-col 2xl:container 2xl:mx-auto  items-center  pt-20 pb-10 gap-10">
        <p className="font-satoshi-bold text-3xl lg:text-7xl">
          Frequently asked questions
        </p>
        <div className="px-4 flex flex-col items-center lg:w-2/3   text-lg rounded-xl">
          <AccordionCard />
        </div>
      </div>
    </FadeInEffect>
  );
};

export default FrequentlyAskedSection;
