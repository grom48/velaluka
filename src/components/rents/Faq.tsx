import React, { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Contact from "./Contact";
interface Faq {
  question: string;
  answer: string;
}

interface Option {
  option: String;
  value: String;
}

interface Props {
  faqs: Faq[];
  option: Option[];
}

const Faq = ({ faqs, option }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="container mx-auto px-4 py-5 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="faq-section">
        <h2 className="main-title">FAQ</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={faq.question}>
            <motion.h3
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
              animate={{
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {faq.question}
            </motion.h3>
            <motion.div
              className={`answer ${activeIndex === index ? "active" : ""}`}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{
                maxHeight: activeIndex === index ? 1000 : 0,
                opacity: activeIndex === index ? 1 : 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {faq.answer}
            </motion.div>
          </div>
        ))}
      </div>
      <Contact option={option} />
    </section>
  );
};

export default Faq;
