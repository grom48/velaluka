import Trips from "@/components/excursion/Trips";
import Footer from "@/components/Footer";
import Location from "@/components/excursion/Location";
import Navbar from "@/components/rents/Navbar";

const excursion = () => {
  return (
    <>
      <Navbar />
      <Trips />
      <Location />
      <Footer />
    </>
  );
};

export default excursion;
