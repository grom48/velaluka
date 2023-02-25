import React from "react";
import Image from "next/image";
import Link from "next/link";
import findUs from "../../public/assets/img/findus.jpg";
const FindUs = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="main-title text-oceanBlue">How to find us?</h2>
      <div className="who-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center py-5 gap-5">
        <div className="about-us-wrapper">
          <h3>Easiest and most stress-less way</h3>
          <div className="texts">
            <p>
              We offer you the best, safest and fastest solution for getting to
              the beautiful island of Korčula.
            </p>
            <p>
              Avoid crowds and unnecessary nervousness by renting our cars,
              scooters, boats... which are insured in cooperation with{" "}
              <Link className="text-oceanBlue" href={"/insurance"}>
                Croatia Osiguranje d.d.
              </Link>
            </p>
            <p className="mb-10">
              We offer you travel insurance and insurance in case of trip
              cancellation.
            </p>
            <Link
              className="bg-oceanBlue py-3 px-7 mt-10 rounded-full text-white"
              href="/contact"
            >
              Ask us more
            </Link>
          </div>
        </div>
        <Image
          src={findUs}
          className="rounded-xl"
          alt="Korčula Island Vela Luka City Center"
        />
      </div>
    </section>
  );
};

export default FindUs;
