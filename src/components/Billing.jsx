import React from "react";
import styles, { layout } from "../style";
import { apple, google, bill } from "../assets";
const Billing = () => (
  <section id="billing" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="lg:w-[100%] max-w-[500px] lg:mt-0 mt-10 ">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your billing & invoicing.{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-7 `}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex md:flex-row flex-cols mt-11">
        <img
          src={apple}
          alt="apple"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="apple"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
