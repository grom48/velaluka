import Image from "next/image";
import rentImage from "../../../public/assets/img/rent-picture.jpg";
const PriceBic = () => {
  return (
    <section className="price container mx-auto px-4">
      <h2 className="main-title py-4">Price includes</h2>
      <div className="price-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="price-selection">
          <ul className="gap-5 flex flex-col">
            <li>Padlock for protection against theft</li>
            <li>Tool bag</li>
            <li>Seat for children</li>
            <li>
              We deliver to the desired location in the area of Vela Luka.
            </li>
            <li>We grant a discount on group and family rentals!</li>
          </ul>
        </div>
        <Image className="rounded-xl" src={rentImage} alt="" />
      </div>
    </section>
  );
};

export default PriceBic;
