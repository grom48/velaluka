import Contact from "@/components/rents/Contact";
import Location from "@/components/excursion/Location";
import Navbar from "@/components/rents/Navbar";
import Footer from "@/components/Footer";
const option = [
  {
    option: "other",
    value: "other",
  },
  {
    option: "Chevrolet Lacetti",
    value: "Chevrolet Lacetti",
  },
  {
    option: "Chevrolet Aveo 1.4",
    value: "Chevrolet Aveo 1.4",
  },
  {
    option: "Chevrolet Aveo 1.2",
    value: "Chevrolet Aveo 1.2",
  },
  {
    option: "Insurance",
    value: "Insurance",
  },
  {
    option: "Modra špilja + otok Vis",
    value: "Modra špilja + otok Vis",
  },
  {
    option: "Uvala stiniva",
    value: "Uvala stiniva",
  },
  {
    option: "Fishing picnic",
    value: "Fishing picnic",
  },
  {
    option: "Fish licence",
    value: "Fish licence",
  },
  {
    option: "Accommodation",
    value: "Accommodation",
  },
  {
    option: "Real Estate",
    value: "Real Estate",
  },
  {
    option: "Krilo",
    value: "Krilo",
  },
  {
    option: "Arriva bus",
    value: "Arriva bus",
  },
  {
    option: "Avio cards",
    value: "Avio cards",
  },
  {
    option: "Krilo kapetan",
    value: "Krilo kapetan",
  },
];
const contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Location />
        <Contact option={option} />
      </div>
      <Footer />
    </>
  );
};

export default contact;
