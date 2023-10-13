import React from "react";
import { heroImg } from "../assets";
import { Button, FloatCard } from "../components";

const Home = () => {
  return (
    <section id="home">
      <div className="relative my-[5rem] md:my-[8rem] ">
        <div className="container flex flex-col-reverse sm:flex-row items-center px-6  mx-auto  space-y-0 md:py-12">
          {/* details container */}
          <div className="flex flex-col items-center md:w-3/5 py-2 sm:items-start ">
            <h2 className="mt-11 text-4xl  text-white font-bold font-grifterbold text-center md:text-5xl md:text-justify">
              Collect and Sell
            </h2>
            <h1 className=" text-4xl text-white font-bold font-grifterbold text-center md:text-8xl md:text-left ">
              RARE NFTs
            </h1>
            <p className="sm:max-w-xl text-white text-center font-poppins font-thin py-4 pr-6 sm:text-left">
              Unleash your imagination and explore the world of unique digital
              art and collectibles. XYZ NFT Studio is where creativity meets
              blockchain technology. Discover, own, and trade one-of-a-kind NFTs
              that redefine the art of digital ownership.
            </p>
            <div className="flex justify-center sm:justify-start">
              <div className="flex flex-col sm:flex-row">
                <Button title="Get Started" />
                <a
                  href="#howitworks"
                  className="font-poppins  font-semibold text-secondary  outline-none   m-2 p-[10px] cursor-pointer hover:text-purple-500"
                >
                  How it Works
                </a>
              </div>
            </div>
          </div>

          {/* image container */}
          <div className="md:w-2/5 py-6 relative items-center justify-center flex flex-col md:m-3 ">
            <img
              src={heroImg}
              alt=""
              className="relative z-[1] w-[300px] sm:w-[400px] "
            />

            <div className="absolute z-[2] bottom-[120px] left-[32px]  sm:bottom-[120px] sm:left-[32px] md:bottom-[120px] md:left-[220px]">
              <FloatCard />
            </div>
          </div>
        </div>
        {/* bg gradient */}
        {/* <div className="absolute z-[0] w-[50%] h-[30%] rounded-sm left-[20rem] bottom-[10rem] bg-home-gradient" /> */}
      </div>
    </section>
  );
};

export default Home;
