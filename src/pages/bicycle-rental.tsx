import React from "react";
import Footer from "@/components/Footer";
import Bicycle from "@/components/rents/Bicycle";
import Faq from "@/components/rents/Faq";
import Navbar from "@/components/rents/Navbar";
import Price from "@/components/rents/Price";

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
    option: "Mountain Bike Cube",
    value: "Mountain Bike Cube",
  },
];
const BicycleRental = () => {
  return (
    <>
      <Navbar />
      <Bicycle />
      <Price />
      <Faq faqs={faqs} option={option} />
      <Footer />
    </>
  );
};

export default BicycleRental;
