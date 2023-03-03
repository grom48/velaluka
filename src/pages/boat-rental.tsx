import Footer from "@/components/Footer";
import Boat from "@/components/rents/Boat";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Contact from "@/components/rents/Contact";
import PriceBoat from "@/components/rents/PriceBoat";
const faqs = [
  {
    question: "What if I cancel my reservation?",
    answer:
      "In case of cancellation of a car or scooter rental reservation, we retain the advance payment paid to confirm the reservation.",
  },
  {
    question: "Is fuel included in price?",
    answer:
      "Fuel is not included in the price of the vehicle rental, and when returning, the vehicle must be returned with the same amount of fuel as it was picked up.",
  },
  {
    question: "Are skis or towing balloon included?",
    answer: "Skis or towing balloon, as desired",
  },
];
const option = [
  {
    option: "Fisherman BlueMax 550",
    value: "Fisherman BlueMax 550",
  },
  {
    option: "Nautica 500",
    value: "Nautica 500",
  },
  {
    option: "Molinari",
    value: "Molinari",
  },
  {
    option: "Sessa Key Largo",
    value: "Sessa Key Largo",
  },
];
const BoatRental = () => {
  return (
    <>
      <Navbar />
      <Boat />
      <PriceBoat />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Faq faqs={faqs} />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default BoatRental;
