import React from "react";

const CreatorsCard = ({ name, userImg, eth, amount, sold }) => {
  return (
    <div className=" container p-2 ">
      <div className="bg-collectioncard p-6">
        {/* flex container */}

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex">
            <img src={userImg} alt="image" />
          </div>

          <div className="flex flex-col px-4 py-2">
            <h2 className="font-poppins font-bold">{name}</h2>
            <div className="flex pt-2">
              <img src={eth} alt="" />
              <p className="font-poppins font-thin ">{amount}</p>
            </div>
          </div>

          <div className="flex flex-col py-2">
            <p className="font-poppins font-thin">NFT SOLD</p>

            <div className="border-t-2 border-slate-600 my-1" />
            <p className="font-poppins font-thin text-left">{sold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCard;
