import Trips from "@/components/excursion/Trips";
import Footer from "@/components/Footer";
import Location from "@/components/excursion/Location";
import Navbar from "@/components/rents/Navbar";
import Contact from "@/components/rents/Contact";

const option = [
  {
    option: "Modra špilja + otok Vis",
    value: "Modra špilja + otok Vis",
  },
  {
    option: "Uvala stiniva",
    value: "Uvala stiniva",
  },
  {
    option: "Fish picnic",
    value: "Fish picnic",
  },
];

const excursion = () => {
  return (
    <>
      <Navbar />
      <Trips />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Contact option={option} />
        <Location />
      </div>
      <Footer />
    </>
  );
};

export default excursion;
