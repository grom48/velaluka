import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import category from "@/pages/api/category";

// Image imports
import left from "../../public/assets/img/icons/left.svg";
import right from "../../public/assets/img/icons/right.svg";
import Link from "next/link";

const Category = () => {
  const ref: any = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // Remove controls
    dots: false,
    arrows: false,
    // Remove dots
    // Remove autoplay
    autoplay: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  return (
    <>
      <section className="container mx-auto px-4 py-10" id="see-more">
        <h2 className="main-title">Select Category</h2>
        <Slider
          {...settings}
          ref={ref}
          className="flex items-center justify-center py-5 gap-5"
        >
          {category.map((el: any, index: number) => (
            <Link href={el.route} key={index}>
              <div className="box-info">
                <div className="stats rounded-full flex py-2 px-4 gap-1 items-center">
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
                <Image
                  src={el.image.src}
                  alt={el.image.alt}
                  width={undefined}
                  height={undefined}
                />
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
              </div>
            </Link>
          ))}
        </Slider>
        <div className="buttons flex items-center gap-3 float-right">
          <button onClick={handlePrevSlide}>
            <Image src={left} alt="arrow-left" />
          </button>
          <button onClick={handleNextSlide}>
            <Image src={right} alt="arrow-right" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Category;
