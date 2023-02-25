import Footer from "@/components/Footer";
import Boat from "@/components/rents/Boat";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";
import Contact from "@/components/rents/Contact";
const faqs = [
  {
    question: "Is insurance mandatory?",
    answer: "Yes it's necessary if you want to rent a boat",
  },
  {
    question:
      "Why should Croatia arrange compulsory insurance for boats and yachts?",
    answer:
      "Obvezno osiguranje plovila pokriva odgovornost vlasnika odnosno korisnika brodice ili jahte za naknadu štete zbog smrti, ozljede tijela, narušenja zdravlja plivača, ronilaca ili ljudi na kopnu. Vlasnici plovila su obvezni osigurati plovilo svake godine, a osiguranje se ugovara na godinu dana.",
  },
  {
    question: "What is covered?",
    answer:
      "Liability for damage you cause to others, in case you kill, injure or harm someone with your vessel. The insured amount is prescribed by law and amounts to €464,529.83 (HRK 3,500,000.00) per event.",
  },
  {
    question: "Are there any additional options?",
    answer:
      "Voluntary accident insurance. Insurance of the person driving the vessel and the passengers from the consequences of an accident.",
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
      <Price />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Faq faqs={faqs} />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default BoatRental;
