import React from "react";
import Contact from "@/components/rents/Contact";

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
const contact = () => {
  return <Contact option={option} />;
};

export default contact;
