import Footer from "@/components/Footer";
import Navbar from "@/components/rents/Navbar";
import Avio from "@/components/tickets/Avio";
import Header from "@/components/tickets/Header";
import Krilotable from "@/components/tickets/Krilotable";
import DenseTable from "@/components/tickets/Timetable";
import React from "react";

const transfer = () => {
  return (
    <>
      <Navbar />
      <Header />
      <DenseTable />
      <Krilotable />
      <Avio />
      <Footer />
    </>
  );
};

export default transfer;
