import React from "react";
import Footer from "@/components/Footer";
import Bicycle from "@/components/rents/Bicycle";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Contact from "@/components/rents/Contact";
import PriceBic from "@/components/rents/PriceBic";

const faqs = [
  {
    question: "Can reservation be changed or cancelled?",
    answer:
      "A reservation must do so in writing (via e-mail or GSM). Changes constitute a change in the renters name or the date of the commencement and/or end date of the service. If the renter cancels a reservation up to 14 days before the designated pick-up time a 15,00 € cancellation fee will be charged. If the renter cancels a reservation within 14 days before the designated pick-up time, does not pick up the rental car or cancels reservation after the designated pick-up time a 20% cancellation fee of the total amount of the reservation will be charged.",
  },
];
const option = [
  {
    option: "Mountain Bike Cube",
    value: "Mountain Bike Cube",
  },
];
const BicycleRental = () => {
  return (
    <>
      <Navbar />
      <Bicycle />
      <PriceBic />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Faq faqs={faqs} />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default BicycleRental;
