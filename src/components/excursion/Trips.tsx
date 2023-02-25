import Link from "next/link";
import Image from "next/image";

import fish from "../../../public/assets/img/fish.webp";
import modra from "../../../public/assets/img/modra.webp";
import uvala from "../../../public/assets/img/uvala.webp";

const Trips = () => {
  return (
    <>
      <section className="container mx-auto px-4 offer-insurance">
        <h1 className="bigTitle">
          Explore beautiful beaches and locations in Croatia near Korčula.
        </h1>
        <div className="wrapper travel pt-20 grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="left-insurance-content">
            <h3 className="insuranceTitle">Modra špilja + otok Vis</h3>
            <div className="price-selection second third flex flex-col gap-5">
              <p>
                <span>Starting point: </span>Vela Luka ( City Center )
              </p>
              <p>
                <span>Starting time: </span>8:00 AM
              </p>
              <p>
                <span>Arrival time: </span>9:15 AM
              </p>
              <p>
                After arrival, transfer to smaller boats to go to the cave for
                sightseeing. The return to the ship follows and the journey
                continues towards the island of Vis - Komiža.
              </p>
              <p className="not-included">
                *The price does not include a ticket to the Blue Cave.
              </p>
            </div>
            <Link
              className="bg-oceanBlue py-3 px-7 mt-10 rounded-full text-white"
              href="/contact"
            >
              Meet with us
            </Link>
          </div>
          <Image
            className="mx-auto rounded-full"
            src={modra}
            alt="Modra špilja + otok Vis vacation trip"
          />
        </div>
        <div className="wrapper pt-20 grid md:flex-col lg:grid-cols-2 items-center gap-5">
          <Image
            className="mx-auto rounded-full"
            src={uvala}
            alt="Uvala stiniva vacation trip"
          />
          <div className="left-insurance-content">
            <h3 className="insuranceTitle">Uvala Stiniva</h3>
            <p>
              Insure yourself against health care costs during your stay in
              abroad for 45 days.
            </p>
            <div className="price-selection second third flex flex-col gap-5">
              <p>
                <span>Starting point: </span>Vela Luka ( City Center )
              </p>
              <p>
                <span>Starting time: </span>According to agreement
              </p>
              <p>
                It is located on the southern side of the island of Vis,
                bordered by high cliffs that protect a beautiful pebble beach.
                It is an idyllic place for swimming in the crystal clear sea
                that will remain in your memory forever. Due to the natural
                shade, it is also suitable for families with small children.
              </p>
            </div>
            <Link
              className="bg-oceanBlue py-3 px-7 mt-10 rounded-full text-white"
              href="/contact"
            >
              Meet with us
            </Link>
          </div>
        </div>
        <div className="wrapper travel pt-20 pb-20 grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="left-insurance-content">
            <h3 className="insuranceTitle">Modra špilja + otok Vis</h3>
            <div className="price-selection second third flex flex-col gap-5">
              <p>
                <span>Starting point: </span>Vela Luka ( City Center )
              </p>
              <p>
                <span>Starting time: </span>According to agreement
              </p>
              <p>
                <span>Arrival time: </span>The schedule depends on your wishes
                and requirements
              </p>
              <p>
                <span>Price: </span>The price depends on the number of people,
                and children have a discount.
              </p>
              <p>
                Transportation, driver, lunch (fish or meat) and drinks are
                included the price. We recommend bringing a bathing suit, towel,
                face cream sun and diving equipment.
              </p>
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
                href="/contact"
              >
                Fishing Licence
              </Link>
            </div>
          </div>
          <Image
            className="mx-auto rounded-full"
            src={fish}
            alt="Fish Picnic + Fish Licenses"
          />
        </div>
      </section>
    </>
  );
};

export default Trips;
