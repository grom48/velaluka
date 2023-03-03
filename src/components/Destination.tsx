import Image from "next/image";
import destination from "@/pages/api/destinations";
import Link from "next/link";
const Destination = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-10">
        <h2 className="main-title">Top Destinations</h2>
        <div className="vacation-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
          {destination.map((el: any, index: number) => (
            <div className="visit-place rounded-xl" key={index}>
              <Image
                className="rounded-xl w-full"
                src={el.image.src}
                alt={el.image.alt}
              />
              <div className="vacation-wrapper p-6">
                <div className="quote-wrapper flex items-center justify-between">
                  <p className="bg-white py-3 px-5 rounded-full text-black">
                    {el.quote}
                  </p>
                  <div className="grade bg-white rounded-full flex py-2 px-4 gap-1 items-center">
                    <p>{el.grade}</p>
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
                </div>
                <h3 className="vacation-title">{el.title}</h3>
                <div className="my-5">
                  <Link
                    className="bg-oceanBlue text-white px-4 py-3 rounded-3xl"
                    href={el.route}
                  >
                    {el.btnInfo}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Destination;
