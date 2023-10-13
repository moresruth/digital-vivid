import React from "react";
import { CollectionCard, SectionTitle } from "../components";
import { collections } from "../constant";

const Collection = () => {
  return (
    <section
      id="collection"
      className="container py-6  mx-auto items-center px-6"
    >
      <SectionTitle />
      <p className=" md:max-w-4xl mx-auto text-white font-poppins font-thin text-center ">
        These collections have gained immense popularity and recognition due to
        the unique properties of NFTs, which differentiate them from traditional
        forms of art and collectibles.
      </p>

      <div className="sm:grid sm:grid-cols-2 sm:my-8 md:grid-cols-3 md:m-5">
        {collections.map((card) => (
          <CollectionCard key={card.id} {...card} />
        ))}
      </div>

      <div className="hidden md:flex max-w-sm md:max-w-sm mx-auto  items-center md:flex-row py-11">
        <div className="flex items-center mx-auto">
          <div className="rounded-full w-[10px] h-[10px] bg-stone-50 mx-2" />
          <div className="rounded-full w-[10px] h-[10px] bg-stone-500 mx-2" />
          <div className="rounded-full w-[10px] h-[10px] bg-stone-500 mx-2" />
          <div className="rounded-full w-[10px] h-[10px] bg-stone-500 mx-2" />
        </div>
      </div>
    </section>
  );
};

export default Collection;
