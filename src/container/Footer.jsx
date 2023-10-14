import React from "react";
import { logo, worksImg } from "../assets";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <section id="footer">
      <div className="w-full  bg-footer py-[2px] cursor-pointer my-5">
        <div className="flex-col bg-primary ">
          <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between ">
            <div className="mx-6 py-3 md:w-1/4  md:py-5 ">
              <img src={logo} alt="logo" className="py-2" />
              <p className="font-poppins font-normal md:pt-1 md:pb-3 ">
                DigitalVivid has the most users of any decentralized platform,
                ever
              </p>
              <ul className="mx-3 py-4 flex flex-row  md:py-3 md:items-left">
                {socialMedia.map((social, index) => (
                  <li
                    key={social.id}
                    className="bg-socialmedia w-[45px] h-[45px] rounded-full mx-2 "
                  >
                    <img
                      src={social.icon}
                      alt="social icons"
                      className="px-3 py-3"
                    />
                  </li>
                ))}
              </ul>
            </div>
            {/* other links */}
            <div className="mx-6 py-3 flex flex-col sm:ml-5 sm:flex-1 sm:flex-row sm:justify-between sm:pd-0 md:px-11 md:pt-11 ">
              {footerLinks.map((footerlink) => (
                <div key={footerlink.id} className="py-4">
                  <h1 className="font-poppins font-semibold">
                    {footerlink.title}
                  </h1>
                  <ul>
                    {footerlink.links.map((link, index) => (
                      <li
                        key={link.name}
                        className="font-poppins font-normal hover:text-purple-500"
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="items-center p-6">
        <p className="text-center font-poppins font-normal">
          Designed by Ruth Mores | Copyright Ⓒ 2023
        </p>
      </div>
    </section>
  );
};

export default Footer;
