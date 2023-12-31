import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";

export default function PageWrapper({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}