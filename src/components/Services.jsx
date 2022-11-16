import React from "react";
import styles from "../style";
import Button from "./Button";
const Services = () => (
  <section
    id="services"
    className="bg-black-gradient-2 rounded-[20px] mt-[100px] pl-[48px] py-[36px] pr-[50px]"
  >
    <div className="flex gap-[30px]">
      <div className="w-[600px]">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className="mt-[24px] text-dimWhite leading-[160%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex items-center md:justify-end md:mt-0 mt-[40px] justify-center">
        <Button></Button>
      </div>
    </div>
  </section>
);

export default Services;
