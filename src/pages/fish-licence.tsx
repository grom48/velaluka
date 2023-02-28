import Navbar from "@/components/rents/Navbar";
import React from "react";
import Image from "next/image";
import fish from "../../public/assets/img/fish.jpg";
import Faq from "@/components/rents/Faq";
import Footer from "@/components/Footer";

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

const FishLicence = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4 py-6">
        <h1 className="bigTitle">Sports fishing permit</h1>
        <Image
          className="rounded-xl w-full"
          src={fish}
          alt="Fishing licence for sports"
        />
      </section>
      <Faq faqs={faqs} />
      <Footer />
    </>
  );
};

export default FishLicence;
