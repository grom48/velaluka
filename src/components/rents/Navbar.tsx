import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container mx-auto px-4 flex items-center justify-between">
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
            <Link href={"/vacation"}>Vacation</Link>
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
