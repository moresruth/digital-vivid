import React from "react";

import Button from "./Button";
import { newsletter } from "../assets";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-11 px-6 my-11">
      <div className="container mx-auto bg-newsletter-gradient items-center">
        <div className="flex flex-col md:flex-row items-center px-6">
          <img src={newsletter} alt="" />
          <div className="items center flex flex-col ">
            <h1 className="font-grifterbold text-center md:text-5xl">
              NEVER MISS A DROP
            </h1>
            <p className="font-poppins px-5 font-normal text-center md:max-w-lg md:text-justify py-3">
              Discover One of The Most Popular NFT Creations Picked For You.
              Subscribe to our super-exclusive drop list and be the first to
              know about upcoming NFT drops
            </p>
            <form className="bg-form-gradient items-center py-3 mt-4  mb-6">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-[230px] h-[52px] py-1 mx-3 font-normal bg-transparent sm:w-[570px] md:w-[345px] md:pl-4"
              />
              <Button title="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
