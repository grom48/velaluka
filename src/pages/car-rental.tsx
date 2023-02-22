import Footer from "@/components/Footer";
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
    question: "What if the reservation is cancelled?",
    answer:
      "In case of cancellation of the reservation, the agency keeps the advance paid to confirm the reservation.",
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
      <Faq faqs={faqs} option={option} />
      <Footer />
    </>
  );
};

export default rentalCar;
