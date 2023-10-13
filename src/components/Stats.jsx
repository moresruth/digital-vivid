import { stats } from "../constant";

const Stats = () => (
  <section className="w-full ">
    <div className="bg-stats  py-[2px]">
      <div className=" bg-primary ">
        <div className="container mx-auto ">
          <div className="flex flex-col sm:flex-row">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="items-center w-full mx-auto bg-gray my-2 p-6  md:justify-center md:py-4"
              >
                <h4 className="font-poppins font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                  {stat.value}
                </h4>
                <p className="font-poppins text-center font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-neutral-300 uppercase ">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
