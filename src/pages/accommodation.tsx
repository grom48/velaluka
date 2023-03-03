import Navbar from "@/components/rents/Navbar";
import Image from "next/image";
import apartmentImage from "../../public/assets/img/apartments.jpg";
import Contact from "@/components/rents/Contact";
import Footer from "@/components/Footer";

const option = [
  {
    option: "Apartment",
    value: "Apartment",
  },
  {
    option: "Holiday House",
    value: "Holiday House",
  },
];

const Accommodation = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto py-10 px-4 apartment">
        <h1 className="bigTitle">Apartments and holiday houses for rent.</h1>
        <div className="apartment-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div>
            <p>
              Private apartments are the ideal vacation choice for anyone who
              wants peace and intimacy.
            </p>
            <p className="pb-20">
              Take a look at our offer of private apartments and holiday homes
              in Vela Luka and the surrounding area!
            </p>
            <Contact option={option} />
          </div>
          <Image
            className="w-full rounded-xl"
            src={apartmentImage}
            alt="Renta an apartment or holiday house in Korčula"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accommodation;
