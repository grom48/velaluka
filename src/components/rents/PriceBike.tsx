import Image from "next/image";
import rentImage from "../../../public/assets/img/rent-picture.jpg";
const PriceBike = () => {
  return (
    <section className="price container mx-auto px-4">
      <h2 className="main-title py-4">Price includes</h2>
      <div className="price-wrapper grid md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="price-selection">
          <ul className="gap-5 flex flex-col">
            <li>Basic insurance</li>
            <li>2 helmets</li>
            <li>Driver and passenger</li>
            <li>Unlimited kilometers</li>
            <li>Free parking in Vela Luka</li>
            <li>
              Free delivery/collection of vehicles in the area of Vela Luka
            </li>
          </ul>
        </div>
        <Image className="rounded-xl" src={rentImage} alt="" />
      </div>
    </section>
  );
};

export default PriceBike;
