import React from "react";
import { worksImg } from "../assets";

const HowItWorks = () => {
  return (
    <section id="howitworks">
      <div className="container mx-auto py-11 items-center">
        <div className="flex flex-col py-11 px-6 items-center md:items-start">
          <h2 className="text-4xl font-bold font-grifterbold text-center md:text-5xl md:text-justify pt-6">
            Lets see how it works
          </h2>
          <p className=" text-center font-poppins font-thin py-4 px-6 md:max-w-3xl md:px-0 md:text-left">
            Non-Fungible Tokens (NFTs) have become a revolutionary technology
            for ownership and authentication of digital assets. Here's a
            simplified explanation of how NFTs work in three easy steps:
          </p>
          <div className="flex flex-col-reverse md:flex-row py-6  ">
            {/* container */}
            <div className="md:w-3/4  px-2">
              <div className="flex flex-col py-6 space-y-8 ">
                {/* item 1 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* text heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        01
                      </div>
                      <h3 className="font-poppins font-bold md:mb-4 md:hidden">
                        Create an NFT
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-poppins font-bold md:block">
                      Create an NFT
                    </h3>
                    <p className="font-poppins font-thin">
                      Once your wallet is connected, you can create your own
                      NFT. Upload your digital artwork, music, or other digital
                      content to the NFT marketplace. Configure the details,
                      such as title, description, and royalties, and mint
                      (create) your NFT. This process verifies your ownership on
                      the blockchain.
                    </p>
                  </div>
                  <div className="border-t-2 border-slate-600 pt-2" />
                </div>
                {/* end of item 1 */}

                {/* item 2 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* text heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        02
                      </div>
                      <h3 className="font-poppins font-bold md:mb-4 md:hidden">
                        Connect your Wallet
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Connect your Wallet
                    </h3>
                    <p className="font-poppins">
                      To get started with NFTs, you need a digital wallet that
                      supports blockchain transactions. Connect your wallet to
                      the NFT platform of your choice. This wallet will store
                      your NFTs and allow you to engage in transactions
                      securely.
                    </p>
                  </div>
                  <div className="border-t-2 border-slate-600 pt-2" />
                </div>
                {/* end of item 2 */}

                {/* item 3 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* text heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        03
                      </div>
                      <h3 className="font-poppins font-bold md:mb-4 md:hidden">
                        Start Earning
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Start Earning
                    </h3>
                    <p className="font-poppins">
                      Your NFT is now available for sale on the marketplace.
                      When someone buys it, the ownership is transferred, and
                      you start earning. Additionally, you can earn royalties
                      from future resales of your NFT, providing ongoing revenue
                      from your digital creations.
                    </p>
                  </div>
                  <div className="border-t-2 border-slate-600 pt-2" />
                </div>
                {/* end of item 3 */}
              </div>
            </div>
            {/* image */}
            <div className="items-center mx-auto relative ">
              <img
                src={worksImg}
                alt="image"
                className="w-[100%] h-100% relative z-[5]"
              />
              <div className="absolute z-[0] w-[10%] h-[50%] top-0 blue__gradient" />
              <div className="absolute z-[1] w-[50%] h-[80%] rounded-full bottom-40 white__gradient" />
              <div className="absolute z-[0] w-[10%] h-[35%] right-20 bottom-20  pink__gradient" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
