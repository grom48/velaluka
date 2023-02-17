import React from "react";
import Image from "next/image";
import korcula from "../../public/assets/img/korcula.jpg";
const Who = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="main-title text-oceanBlue">Who are we?</h2>
      <div className="who-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center py-5 gap-5">
        <Image
          src={korcula}
          className="rounded-xl"
          alt="Korčula Island City Center"
        />
        <div className="about-us-wrapper">
          <h3>Island of Korčula - Vela Luka</h3>
          <div className="texts">
            <p>
              In addition to offering rest, relaxation and enjoyment, the island
              of Korčula also offers a return to nature, the inclusion of all
              bodily senses that are excluded and useless in cities.
            </p>
            <p>
              The main activity, in addition to swimming in the sea and
              sunbathing, can also be trying various local specialties, foods
              collected in the wild and prepared according to a traditional
              recipe, without chemicals.
            </p>
            <p>
              By ingesting pure elixirs of life, the body wakes up and becomes
              healthy, and the famous saying "you are what you eat" will be
              proven many times.In order to visit all the beauties of Korčula
              both by land and by sea, we offer vehicle rental options that best
              suit your needs and possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
