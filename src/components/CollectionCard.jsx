import React from "react";
import { nftart01, nftart02, people01 } from "../assets";
import Button from "./Button";
import { collections } from "../constant";

const CollectionCard = ({
  userImg,
  name,
  nftArt,
  currentPrice,
  standard,
  chain,
  bid,
}) => {
  return (
    <div className="bg-collectioncard my-11 md:mx-5 sm:m-3 ">
      <div className="p-6">
        {/* flex container for img and name */}

        <div className="flex ">
          <img src={userImg} alt="people_01" className="mr-3" />
          <h3 className="font-poppins font-thin ">{name}</h3>
        </div>
        {/* container for nft art */}
        <div className="py-3 mb-2">
          <img src={nftArt} alt="" />
        </div>

        {/* container for the details */}
        <div className="pt-3 ">
          <div className="border-t-2 border-slate-600 pt-2" />
          <div className="flex justify-between px-2">
            <p className="font-poppins font-thin">Current Price</p>
            <div className="font-poppins font-thin">{currentPrice}</div>
          </div>
        </div>
        {/* container for the details */}
        <div className="pt-3 ">
          <div className="border-t-2 border-slate-600 pt-2" />
          <div className="flex justify-between px-2">
            <p className="font-poppins font-thin">Token Standard</p>
            <p className="font-poppins font-thin">{standard}</p>
          </div>
        </div>
        {/* container for the details */}
        <div className="pt-3 ">
          <div className="border-t-2 border-slate-600 pt-2" />
          <div className="flex justify-between px-2">
            <p className="font-poppins font-thin">Chain</p>
            <p className="font-poppins font-thin">{chain}</p>
          </div>
        </div>

        <div className="pt-3 ">
          {/* <div className="border-t-2 border-slate-600 pt-2" /> */}
          <div className="flex justify-between px-2 pt-5">
            <div className="flex justify-between flex-col">
              <p className="font-poppins font-thin">HIGHEST BID</p>
              <p className="font-poppins font-thin">{bid}</p>
            </div>

            <Button title="Buy now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
