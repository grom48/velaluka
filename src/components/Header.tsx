import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
// Image imports
import logo from "../../public/assets/img/logo.png";

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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <header>
        <nav className="container mx-auto text-black px-4 pt-5 flex items-center justify-between">
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
            <li>
              <Link href={"/fish-licence"}>Fish Licence</Link>
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
                    className={`question ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                    animate={{
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                  >
                    <li className="flex gap-3">{faq.question}</li>
                  </motion.h3>
                  <motion.div
                    className={`answer ${
                      activeIndex === index ? "active" : ""
                    }`}
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
              <li className="z-50">
                <Link href={"/fish-licence"}>Fish licence</Link>
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
                isOpen
                  ? "ham hamRotate180 ham5 active"
                  : "ham hamRotate180 ham5"
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
        <div className="main-content container mx-auto px-4 text-white flex flex-col gap-2 h-5/6 justify-end">
          <p>Tourist Agency</p>
          <h1>
            Everything in one place, insurance, renting scooters, bikes, cars,
            boats, vacations and many more.
          </h1>
          <Link
            href="#see-more"
            className="flex items-center gap-3 bg-oceanBlue rounded-full py-3 px-7 w-min"
          >
            <p className="w-max">See more</p>
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.213 20.5189C19.0286 20.675 18.7953 20.7547 18.5581 20.7425C18.3208 20.7304 18.0962 20.6273 17.9273 20.4531C17.7584 20.2788 17.6572 20.0457 17.643 19.7985C17.6288 19.5512 17.7027 19.3072 17.8504 19.1132L24.7597 11.9088L1.96406 11.9088C1.71003 11.9088 1.46627 11.8043 1.28574 11.6179C1.10522 11.4316 1.00253 11.1784 0.999985 10.9136C0.999985 10.647 1.10156 10.3913 1.28236 10.2027C1.46316 10.0142 1.70837 9.9083 1.96406 9.9083L24.758 9.9083L17.8488 2.71898C17.6717 2.5286 17.5727 2.27381 17.5727 2.00859C17.5727 1.74338 17.6717 1.48858 17.8488 1.2982C17.9377 1.20378 18.0437 1.12877 18.1607 1.07756C18.2777 1.02636 18.4032 0.999983 18.5301 0.999983C18.657 0.999983 18.7826 1.02636 18.8996 1.07756C19.0165 1.12877 19.1225 1.20378 19.2114 1.2982L27.7563 10.2049C27.9325 10.3927 28.0311 10.645 28.0311 10.9077C28.0311 11.1704 27.9325 11.4227 27.7563 11.6106L19.213 20.5189Z"
                fill="white"
                stroke="white"
                strokeWidth="0.6"
              />
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
