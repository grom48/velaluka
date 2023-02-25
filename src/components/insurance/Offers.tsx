import React from "react";
import Image from "next/image";
import Link from "next/link";
import travelInsurance from "../../../public/assets/img/travel.png";
import homeInsurance from "../../../public/assets/img/home1.png";
const Offers = () => {
  return (
    <>
      <section className="container mx-auto px-4 offer-insurance">
        <h1 className="bigTitle">
          Your Travel and Rental Needs for a Worry-Free Trip
        </h1>
        <div className="wrapper travel grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="left-insurance-content">
            <h3 className="insuranceTitle">Travel Insurance</h3>
            <p>
              Insure yourself against health care costs during your stay in
              abroad for 45 days.
            </p>
            <div className="price-selection second">
              <ul className="gap-5 flex flex-col">
                <h4>What is included?</h4>
                <li>Health care and emergency medical expenses.</li>
                <li>
                  Transportation by ambulance or helicopter to the nearest
                  hospital.
                </li>
                <li>
                  Transportation to your home country if you cannot return home
                  as planned due to health reasons.
                </li>
                <li>
                  Costs of hospital treatment and transportation of insured
                  persons to their homeland due to illness from Covid-19
                </li>
              </ul>
            </div>
            <Link
              className="bg-oceanBlue py-3 px-7 mt-10 rounded-full text-white"
              href="/contact"
            >
              Meet with us
            </Link>
          </div>
          <Image
            className="mx-auto"
            src={travelInsurance}
            alt="Travel Insurance Croatia Osiguranje"
          />
        </div>
        <div className="wrapper pt-5 grid md:flex-col lg:grid-cols-2 items-center gap-5">
          <Image
            className="mx-auto"
            src={homeInsurance}
            alt="Home Insurance Croatia Osiguranje"
          />
          <div className="left-insurance-content">
            <h3 className="insuranceTitle">Home Insurance</h3>
            <p>
              Insure yourself against health care costs during your stay in
              abroad for 45 days.
            </p>
            <div className="price-selection second">
              <ul className="gap-5 flex flex-col">
                <h4>What is included?</h4>
                <li>Health care and emergency medical expenses.</li>
                <li>
                  Transportation by ambulance or helicopter to the nearest
                  hospital.
                </li>
                <li>
                  Transportation to your home country if you cannot return home
                  as planned due to health reasons.
                </li>
                <li>
                  Costs of hospital treatment and transportation of insured
                  persons to their homeland due to illness from Covid-19
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-10 btnInsure">
              <Link
                className="bg-oceanBlue py-3 px-7 mt-10 rounded-full text-white"
                href="/contact"
              >
                Meet with us
              </Link>
              <Link
                className="border-2 border-oceanBlue py-3 px-7 mt-10 rounded-full text-oceanBlue"
                href={"/croatia-osiguranje"}
              >
                See brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
