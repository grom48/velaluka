import Navbar from "@/components/rents/Navbar";
import Rents from "@/components/rents/Rents";
import React from "react";

const rentalCar = () => {
  return (
    <>
      <section className="rental">
        <Navbar />
        <Rents />
      </section>
    </>
  );
};

export default rentalCar;
