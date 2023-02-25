import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Destination from "@/components/Destination";
import Who from "@/components/Who";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";
import FindUs from "@/components/FindUs";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="toTopBtn">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      <Head>
        <title>Atlas Vela Luka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Category />
      <Destination />
      <FindUs />
      <Who />
      <Journey />
      <Footer />
    </>
  );
}
