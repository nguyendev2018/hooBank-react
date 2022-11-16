import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section
    id="statistical"
    className="grid gap-y-5 md:grid-cols-3 ss:grid-cols-2 grid-cols-1  sm:mb-20 mb-6"
  >
    {stats.map((item) => {
      return (
        <div key={item.id} className="flex items-center relative">
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {item.value}
          </h4>
          <span className="ml-[28px] font-poppins font-normal xs:text-[20px] text-[15px] text-gradient xs:leading-[35px] leading-[26px] text-white ">
            {item.title}
          </span>
        </div>
      );
    })}
  </section>
);

export default Stats;
