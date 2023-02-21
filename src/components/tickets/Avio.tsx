import React from "react";
import Link from "next/link";
const Avio = () => {
  return (
    <section className="ticket-header airplane my-5 container mx-auto px-4 rounded-xl">
      <div className="avio-content">
        <h2 className="text-white avio-title">Avionske karte za sve destinacije.</h2>
        <p>
          Možemo Vam pronaći avionsku kartu sa polaskom iz Zagreba, Splita,
          Dubrovnika za sve Europske i svjetske destinacije kao što su London,
          Pariz, New York...
        </p>
        <Link
          className="bg-oceanBlue py-3 px-7 mt-20 rounded-full text-white"
          href="/contact"
        >
          Buy Ticket
        </Link>
      </div>
    </section>
  );
};

export default Avio;
