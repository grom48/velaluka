import Footer from "@/components/Footer";
import Location from "@/components/insurance/Location";
import Offers from "@/components/insurance/Offers";
import Why from "@/components/insurance/Why";
import Navbar from "@/components/rents/Navbar";
import React from "react";

const insurance = () => {
  return (
    <>
      <Navbar />
      <Offers />
      <Why />
      <Location />
      <Footer />
    </>
  );
};

export default insurance;
