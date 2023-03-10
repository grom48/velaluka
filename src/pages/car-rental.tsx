import Footer from "@/components/Footer";
import Contact from "@/components/rents/Contact";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";
import Rents from "@/components/rents/Rents";

const faqs = [
  {
    question: "Which documents I need to rent a car?",
    answer:
      "When signing the contract, a valid driver's license must be attached to the passport or identity card.",
  },
  {
    question: "What is the minimum driver age?",
    answer: "The minimum age of the driver is 21 years.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "The minimum rental period is 12 hours.",
  },
  {
    question: "Is fuel included in the price?",
    answer:
      "Fuel is not included in the price. The vehicle should be returned with the same amount of fuel that you found when you picked it up.",
  },
  {
    question: "Can reservation be changed or cancelled?",
    answer:
      "A reservation must do so in writing (via e-mail or GSM). Changes constitute a change in the renters name or the date of the commencement and/or end date of the service. If the renter cancels a reservation up to 14 days before the designated pick-up time a 15,00 € cancellation fee will be charged. If the renter cancels a reservation within 14 days before the designated pick-up time, does not pick up the rental car or cancels reservation after the designated pick-up time a 20% cancellation fee of the total amount of the reservation will be charged.",
  },
  {
    question: "What insurance is included in the price?",
    answer:
      "Liability insurance for damage caused to a third party. CDW (Collision Damage Waiver) - risk insurance with participation in damages. The user's liability for damage and theft is limited to the amount of the deductible/participation in damage.",
  },
];
const option = [
  {
    option: "Chevrolet Lacetti",
    value: "Chevrolet Lacetti",
  },
  {
    option: "Chevrolet Aveo 1.4",
    value: "Chevrolet Aveo 1.4",
  },
  {
    option: "Chevrolet Aveo 1.2",
    value: "Chevrolet Aveo 1.2",
  },
];

const rentalCar = () => {
  return (
    <>
      <Navbar />
      <Rents />
      <Price />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Faq faqs={faqs} />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default rentalCar;
