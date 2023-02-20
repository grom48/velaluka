import Footer from "@/components/Footer";
import Boat from "@/components/rents/Boat";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";
import React from "react";
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
      <Faq faqs={faqs} option={option} />
      <Footer />
    </>
  );
};

export default BoatRental;
