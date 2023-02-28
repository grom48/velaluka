import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";
import { motion } from "framer-motion";
interface Faq {
  question: string;
  answer: string;
}

interface Props {
  faqs: Faq[];
}

const faqs = [
  {
    question: "Rents",
    answer: "Car rental",
    answer2: "Scooter rental",
    answer3: "Bicycle rental",
    answer4: "Boat rental",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="container mx-auto px-4 pt-5 flex items-center justify-between">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Atlas Vela Luka Touristic Agency Logo" />
        </Link>
      </div>
      <ul className="links flex items-center gap-5 text-xl">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <div className="dropdown">
          <button className="dropbtn">Rents</button>
          <div className="dropdown-content">
            <Link href={"/car-rental"}>Renta Car</Link>
            <Link href={"/scooter-rental"}>Renta Scooter</Link>
            <Link href={"/boat-rental"}>Renta Boat</Link>
            <Link href={"/bicycle-rental"}>Renta Bicycle</Link>
          </div>
        </div>
        <li>
          <Link href={"/tickets"}>Tickets</Link>
        </li>
        <li>
          <Link href={"/insurance"}>Insurance</Link>
        </li>
        <li>
          <Link href={"/excursion"}>Excursion</Link>
        </li>
        <li>
          <Link href={"/accommodation"}>Accommodation</Link>
        </li>
        <li>
          <Link href={"/real-estate"}>Real Estate</Link>
        </li>
        <li className="bg-oceanBlue py-3 px-7 rounded-full">
          <Link className="text-white" href={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="overlay" style={{ width: isOpen ? "100%" : "0%" }}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href="">Rents</Link>
          </li>
          <li>
            <Link href={"/transfer"}>Tickets</Link>
          </li>
          <li>
            <Link href={"/insurance"}>Insurance</Link>
          </li>
          <li>
            <Link href={"/excursion"}>Excursion</Link>
          </li>
          {faqs.map((faq, index) => (
            <div className="text-center text-xl" key={faq.question}>
              <motion.h3
                className={`question ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
                animate={{
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <li className="flex gap-3">{faq.question}</li>
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
                <li>
                  <Link href="car-rental">{faq.answer}</Link>
                </li>
                <li>
                  <Link href={"scooter-rental"}>{faq.answer2}</Link>
                </li>
                <li>
                  <Link href={"bicycle-rental"}>{faq.answer3}</Link>
                </li>
                <li>
                  <Link href={"boat-rental"}>{faq.answer4}</Link>
                </li>
              </motion.div>
            </div>
          ))}
          <li className="z-50">
            <Link href={"/accommodation"}>Accommodation</Link>
          </li>
          <li className="z-50">
            <Link href={"/real-estate"}>Real Estate</Link>
          </li>
          <li className="bg-oceanBlue py-3 px-7 rounded-full">
            <Link className="text-white" href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <svg
          className={
            isOpen ? "ham hamRotate180 ham5 active" : "ham hamRotate180 ham5"
          }
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
