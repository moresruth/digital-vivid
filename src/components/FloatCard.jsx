import React from "react";
import Button from "./Button";

const FloatCard = () => {
  return (
    <div className="flex flex-col items-center text-white absolute z-[3] bg-blur w-[15rem] h-[8rem] p-4">
      <h3>Headline of Chaos</h3>
      <p className=" text-gray-300 text-center">4.15 ETH</p>
      <Button title="Place A Bid" />
    </div>
  );
};

export default FloatCard;
