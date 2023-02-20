import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";
import Faq from "@/components/rents/Faq";
import Footer from "@/components/Footer";
import Scooter from "@/components/rents/Scooter";

const faqs = [
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
    option: "Scooter 50cm3",
    value: "Scooter 50cm3",
  },
];

const ScooterRental = () => {
  return (
    <>
      <Navbar />
      <Scooter />
      <Price />
      <Faq faqs={faqs} option={option} />
      <Footer />
    </>
  );
};

export default ScooterRental;
