import React from "react";
import Image from "next/image";
import hours from "../../../public/assets/img/icons/hours24.png";
import carpool from "../../../public/assets/img/icons/Carpool.png";
import coronavirus from "../../../public/assets/img/icons/Coronavirus.png";
import chouse from "../../../public/assets/img/icons/Country House.png";
import livingRoom from "../../../public/assets/img/icons/Living Room.png";
import globe from "../../../public/assets/img/icons/globe.png";

interface WhyProps {
  id: number;
  logo: {
    image: any;
    alt: String;
  };
  name: String;
  desc: String;
}

const data: WhyProps[] = [
  {
    id: 1,
    logo: {
      image: hours,
      alt: "24/7 service by our agents",
    },
    name: "24/7 service",
    desc: "In case of health problems, we will refer you to the nearest health facility.",
  },
  {
    id: 2,
    logo: {
      image: coronavirus,
      alt: "Coronavirus",
    },
    name: "Covid 19 insurance",
    desc: "Due to the illness caused by Covid-19, the costs of hospital treatment and the costs of returning to the homeland are covered.",
  },
  {
    id: 3,
    logo: {
      image: globe,
      alt: "Insurance in whole world",
    },
    name: "Insurance worldwide",
    desc: "Wherever you travel, insurance protects you during your stay abroad.",
  },
  {
    id: 4,
    logo: {
      image: carpool,
      alt: "24/7 service by our agents",
    },
    name: "24/7 service",
    desc: "All construction parts of a house or apartment, Tiles and parquets, Installations such as boilers, air conditioners and solar panels Auxiliary buildings, fences, canopies, gazebos and swimming pools",
  },
  {
    id: 5,
    logo: {
      image: chouse,
      alt: "construction part",
    },
    name: "Construction part",
    desc: "All construction parts of a house or apartment, Tiles and parquets, Installations such as boilers, air conditioners and solar panels Auxiliary buildings, fences, canopies, gazebos and swimming pools",
  },
  {
    id: 6,
    logo: {
      image: livingRoom,
      alt: "Things in the household",
    },
    name: "Things in the household",
    desc: "Furniture, technology, clothes and shoes, Money, jewelry and art, Costs of creating personal documents and documents, Wall and floor coverings, blinds and glass on windows and doors",
  },
];

const Why = () => {
  return (
    <>
      <section className="why-us container mx-auto px-4 why">
        <h2 className="insuranceTitle text-center py-8">Why choose us?</h2>
        <div className="why-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5 px-4">
          {data.slice(0, 3).map((el: any, key: any) => (
            <div className="content">
              <Image src={el.logo.image} alt={el.logo.alt} />
              <h4 className="whyTitle">{el.name}</h4>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
        <div className="why-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-5 px-4">
          {data.slice(3, 6).map((el: any, key: any) => (
            <div className="content">
              <Image src={el.logo.image} alt={el.logo.alt} />
              <h4 className="whyTitle">{el.name}</h4>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Why;
