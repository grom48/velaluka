import Image from "next/image";
import bicycle from "@/pages/api/bicycle";

import bike1 from "../../../public/assets/img/bike12.jpg";
import bike2 from "../../../public/assets/img/bike22.jpg";

const Bicycle = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <h1 className="main-title">Best rental scooters in Vela Luka</h1>
        <div className="cars-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {bicycle.map((el: any, index: number) => (
            <div className="box-info flex flex-col justify-between" key={index}>
              <div className="stats rounded-full w-min float-right flex py-2 px-4 gap-1 items-center">
                <span>4.4</span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#E9EE00"
                  />
                </svg>
              </div>
              <div className="rent-content flex flex-col justify-between">
                <Image
                  className="w-3/4"
                  src={el.image.src}
                  alt={el.image.alt}
                />
                <h3>{el.title}</h3>
                <p>{el.spec}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
          <Image className="rounded-xl" src={bike1} alt="Bicycle rental" />
          <Image className="rounded-xl" src={bike2} alt="Bicycle rental" />
        </div>
      </section>
    </>
  );
};

export default Bicycle;
