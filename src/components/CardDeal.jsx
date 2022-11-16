import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => (
  <section id="cardDeal" className={`${layout.section}  mt-30`}>
    <div className="">
      <h2 className={`${styles.heading2}  `}>
        Find a better card deal <br /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} mt-6 mb-12 md:max-w-[500px]  `}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button></Button>
    </div>
    <div className={`${layout.sectionImg}`}>
      <div className="xl:max-w-[400px] xl:m-0 xl:m-auto maxSm:m-0 maxSm:m-auto lg:max-w-[100%] md:ml-auto">
        <i6mg
          src={card}
          alt="billing"
          className="w-[100%] h-[100%] object-cover "
        />
      </div>
    </div>
  </section>
);

export default CardDeal;
