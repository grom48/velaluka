import React from "react";
import Image from "next/image";
import korcula from "../../public/assets/img/korcula.jpg";
const Who = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="main-title text-oceanBlue">Who are we?</h2>
      <div className="who-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center py-5">
        <Image
          src={korcula}
          className="rounded-xl"
          alt="Korčula Island City Center"
        />
        <div className="about-us-wrapper">
          <h3>Island of Korčula - Vela Luka</h3>
        </div>
      </div>
    </section>
  );
};

export default Who;
