import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";
const renderItem = feedback.map((item) => {
  return (
    <div
      className="py-[60px] px-[40px] flex flex-col rounded-[20px] cursor-pointer place-items-stretch feedback-card "
      key={item.id}
    >
      <img src={quotes} alt="" className="w-[42px] h-[28px]" />
      <p className={`${styles.paragraph}  flex-1 mt-10 mb-8`}>{item.content}</p>
      <div className="flex flex-row items-center">
        <img src={item.img} alt="people" className="w-[48px] h-[48px]" />
        <div className="flex flex-col ml-6 ">
          <h3 className="text-[20px] text-white font-semibold">{item.name}</h3>
          <p className="text-[16px] mt-2 text-white">{item.title}</p>
        </div>
      </div>
    </div>
  );
});

const AboutUs = () => {
  return (
    <section id="about-us" className="mt-20">
      <div className="grid ss:grid-cols-2 grid-cols-1 items-center">
        <h2 className={`${styles.heading2} mb-[30px]`}>
          What people are <br /> saying about us
        </h2>
        <p
          className={`${styles.paragraph}   max-w-[450px] md:mb-0 mb-[40px] md:mt-0 mt-[20px] `}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="grid gap-[70px] sm:grid-cols-2 md:grid-cols-3">
        {renderItem}
      </div>
    </section>
  );
};

export default AboutUs;
