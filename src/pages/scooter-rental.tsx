import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";
import Faq from "@/components/rents/Faq";
import Footer from "@/components/Footer";
import Scooter from "@/components/rents/Scooter";
import Contact from "@/components/rents/Contact";
const faqs = [
  {
    question: "Can reservation be changed or cancelled?",
    answer:
      "A reservation must do so in writing (via e-mail or GSM). Changes constitute a change in the renters name or the date of the commencement and/or end date of the service. If the renter cancels a reservation up to 14 days before the designated pick-up time a 15,00 € cancellation fee will be charged. If the renter cancels a reservation within 14 days before the designated pick-up time, does not pick up the rental car or cancels reservation after the designated pick-up time a 20% cancellation fee of the total amount of the reservation will be charged.",
  },
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building server-side rendered and static web applications.",
  },
  {
    question: "What are the benefits of using Next.js?",
    answer:
      "Some benefits of using Next.js include automatic code splitting, server-side rendering, and optimized performance.",
  },
  {
    question: "How do I get started with Next.js?",
    answer:
      "You can get started with Next.js by following the documentation and tutorials on the official website.",
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

const ScooterRental = () => {
  return (
    <>
      <Navbar />
      <Scooter />
      <Price />
      <div className="container mx-auto px-4 py-6 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Faq faqs={faqs} />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default ScooterRental;
