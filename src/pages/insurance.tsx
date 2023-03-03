import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Location from "@/components/insurance/Location";
import Why from "@/components/insurance/Why";
import Navbar from "@/components/rents/Navbar";
import crsig from "../../public/assets/img/crsig-logo.svg";
import Offers from "@/components/insurance/Offers";
import Contact from "@/components/rents/Contact";

const option = [
  {
    option: "Home insurance",
    value: "Home insurance",
  },
  {
    option: "Travel insurance",
    value: "Travel insurance",
  },
  {
    option: "Insurance question",
    value: "Insurance question",
  },
];

const insurance = () => {
  return (
    <>
      <Link href="https://crosig.hr/">
        <Image
          className="fixed right-5 bottom-5"
          src={crsig}
          alt="Croatia Osiguranje Partners logo"
        />
      </Link>
      <Navbar />
      <Offers />
      <Why />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Contact option={option} />
        <Location />
      </div>
      <Footer />
    </>
  );
};

export default insurance;
