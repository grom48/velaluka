import React, { useState } from "react";

import { motion } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

/* const faqs: Faq[] = [
  {
    id: 1,
    question: "How To Make Appoitment",
    answer: "You can book by website or by phone",
  },
  {
    id: 2,
    question: "How To Make Appoitment",
    answer: "You can book by website or by phone",
  },
]; */

interface FaqSectionProps {
  faqs: Faq[];
}

const Faq = ({ faqs }: FaqSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="container mx-auto px-4">
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={faq.question}>
            <motion.h3
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
              initial={{ backgroundColor: "#f0f0f0" }}
              animate={{
                backgroundColor: activeIndex === index ? "#d9d9d9" : "#f0f0f0",
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
    </section>
  );
};

export default Faq;
