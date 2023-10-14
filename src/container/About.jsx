import React from "react";
import { aboutImg, heroImg } from "../assets";
import { Button } from "../components";

const About = () => {
  return (
    <section id="about" className="py-7">
      {/* flex container */}

      <div className="container flex flex-col-reverse  md:flex-row items-center px-6  mx-auto  space-y-0 md:py-12 ">
        {/* left item */}
        <div className="md:w-1/2 pt-11 ">
          <img src={aboutImg} alt="" className="object-contain " />
        </div>

        {/* right item image */}
        <div className="flex flex-col md:w-3/4 py-2 my-5  ">
          <div className="items-center justify-center  md:pl-[8rem] ">
            <h2 className="text-4xl font-bold font-grifterbold text-center md:text-5xl md:text-justify">
              A trailblazer in the
            </h2>
            <h1 className=" text-4xl font-bold font-grifterbold text-center md:text-8xl md:text-left ">
              NFT space
            </h1>
            <p className="md:max-w-xl text-center font-poppins font-thin py-4 pr-6 md:text-left">
              Digital Vivid NFT Studio is a trailblazer in the NFT space,
              founded by passionate artists and tech enthusiasts.
            </p>
            <p className="md:max-w-xl text-center font-poppins font-thin py-4 pr-6 md:text-left">
              Our mission is to empower creators, redefine digital ownership,
              and create a platform that celebrates artistic expression. Meet
              the visionaries behind the studio and learn more about our
              journey.
            </p>
            <div className="hidden md:block">
              <Button title="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
