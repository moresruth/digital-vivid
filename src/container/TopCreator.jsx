import React from "react";
import { CreatorsCard, SectionTitle } from "../components";
import { creators } from "../constant";

const TopCreator = () => {
  return (
    <section id="creators" className="container py-11  mx-auto items-center">
      <SectionTitle />
      <div className="px-3 md:max-w-lx grid sm:grid-flow-row-dense sm:grid-cols-3 ">
        {creators.map((card) => (
          <CreatorsCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default TopCreator;
