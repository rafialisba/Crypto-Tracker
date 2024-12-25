import React from "react";
import Carousel from "./Carousel";
import { DESCRIPTION, HEADLINE } from "@/constant";

const Hero = () => {
  return (
    <div className="mt-36 text-neutral-400 text-center">
      <h1 className="text-3xl mb-4">{HEADLINE}</h1>
      <p className="text-md px-36">{DESCRIPTION}</p>
      <Carousel />
    </div>
  );
};

export default Hero;
