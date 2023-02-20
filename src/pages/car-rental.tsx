import Footer from "@/components/Footer";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";
import Rents from "@/components/rents/Rents";

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
