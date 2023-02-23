import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Location from "@/components/insurance/Location";
import Offers from "@/components/insurance/Offers";
import Why from "@/components/insurance/Why";
import Navbar from "@/components/rents/Navbar";
import crsig from "../../public/assets/img/crsig-logo.svg";
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
      <Location />
      <Footer />
    </>
  );
};

export default insurance;
