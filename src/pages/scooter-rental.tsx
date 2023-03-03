import Navbar from "@/components/rents/Navbar";
import Faq from "@/components/rents/Faq";
import Footer from "@/components/Footer";
import Scooter from "@/components/rents/Scooter";
import Contact from "@/components/rents/Contact";
import PriceBike from "@/components/rents/PriceBike";
const faqs = [
  {
    question: "On how much time I can rent a scooter",
    answer: `
    <li>4h</li>
    <li>6h</li>
    <li>12h</li>
    <li>24h</li>
    <li>3days</li>
    <li>5days</li>
    <li>7days</li>
    <li>14days</li>
    `,
  },
  {
    question: "Can reservation be changed or cancelled?",
    answer:
      "A reservation must do so in writing (via e-mail or GSM). Changes constitute a change in the renters name or the date of the commencement and/or end date of the service. If the renter cancels a reservation up to 14 days before the designated pick-up time a 15,00 € cancellation fee will be charged. If the renter cancels a reservation within 14 days before the designated pick-up time, does not pick up the rental car or cancels reservation after the designated pick-up time a 20% cancellation fee of the total amount of the reservation will be charged.",
  },
  {
    question: "How old must a driver be?",
    answer: "The scooter driver must be at least 24 years old.",
  },
  {
    question: "Is fuel included in price?",
    answer:
      "Fuel is not included in the price of the vehicle rental, and when returning, the vehicle must be returned with the same amount of fuel as it was picked up.",
  },
  {
    question: "What is needed to rent a scooter?",
    answer:
      "Driving licence, before taking over the scooter, the renter is checked whether he knows how to operate it (a driver's license does not mean that a person knows how to operate a scooter).",
  },
];
const option = [
  {
    option: "Scooter 50cm3",
    value: "Scooter 50cm3",
  },
];

const ScooterRental = () => {
  return (
    <>
      <Navbar />
      <Scooter />
      <PriceBike />
      <div className="container mx-auto px-4 py-6 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Faq faqs={faqs} />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default ScooterRental;
