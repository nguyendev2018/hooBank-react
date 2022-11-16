import React from "react";
import { clients } from "../constants";
const renderItem = clients.map((item) => {
  return (
    <div className="lg:max-w-[192px] md:max-w-[100%] max-w-[200px] m-0 m-auto cursor-pointer">
      <img src={item.logo} alt="w-[100%] h-[100%]" title={item.title} />
    </div>
  );
});
const Clients = () => {
  return (
    <section
      id="clients"
      className="grid md:grid-cols-4 grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[100px] pt-[100px] items-center"
    >
      {renderItem}
    </section>
  );
};

export default Clients;
