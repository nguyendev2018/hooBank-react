import React from "react";
import { logo } from "../assets";
import { footerLinks } from "../constants";
import styles from "../style";
const Footer = () => {
  const renderItem = footerLinks.map((item) => {
    return (
      <div className=" text " key={item.title}>
        <h4 className="text-[18px] text-title mb-[24px]">{item.title}</h4>
        <ul className="grid gap-5 ">
          {item.links.map((link) => {
            return (
              <li className=" text-[16px]  gap-3 text-title--item">
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return (
    <footer
      id="footer"
      className="lg:px-16 md:px-10 px-6 md:py-[72px] py-[50px]"
    >
      <div className="grid ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[78px]">
        <div>
          <div className="max-w-[266px]">
            <img
              src={logo}
              alt="HooBank"
              title="HooBank"
              className="w-[100%] object-cover"
            />
          </div>
          <p className={`${styles.paragraph} pt-[34px] max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {renderItem}
      </div>
    </footer>
  );
};

export default Footer;
