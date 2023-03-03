import React from "react";
import Image from "next/image";
import rentImage from "../../../public/assets/img/rent-picture.jpg";
const PriceBoat = () => {
  return (
    <section className="price container mx-auto px-4">
      <h2 className="main-title py-4">Price includes</h2>
      <div className="price-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="price-selection">
          <ul className="gap-5 flex flex-col">
            <li>Passenger insurance</li>
            <li>Oars</li>
            <li>Awning</li>
            <li>Anchor</li>
            <li>First aid</li>
            <li>Vests</li>
          </ul>
        </div>
        <Image className="rounded-xl" src={rentImage} alt="" />
      </div>
    </section>
  );
};

export default PriceBoat;
