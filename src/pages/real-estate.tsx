import Navbar from "@/components/rents/Navbar";
import Image from "next/image";
import realEstateImage from "../../public/assets/img/real-estate.jpg";
import Contact from "@/components/rents/Contact";
import Footer from "@/components/Footer";

const option = [
  {
    option: "Buy Real Estate",
    value: "Buy Real Estate",
  },
  {
    option: "Sell Real Estate",
    value: "Sell Real Estate",
  },
];
const RealEstate = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto py-10 px-4 apartment">
        <h1 className="bigTitle">Buy or sell your real estate.</h1>
        <div className="apartment-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div>
            <p className="pb-20">
              If you want to offer your property for sale or are looking for
              something suitable for purchase, please contact us for more
              information.
            </p>
            <Contact option={option} />
          </div>
          <Image
            className="w-full rounded-xl"
            src={realEstateImage}
            alt="Buy or sell your real estate with our help"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RealEstate;
