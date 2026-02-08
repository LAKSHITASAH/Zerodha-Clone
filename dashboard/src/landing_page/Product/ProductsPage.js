import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ConsoleSection from "./ConsoleSection";
import CoinSection from "./CoinSection";
import Universe from "./Universe";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <>
      <Hero />

      <main className="product-container">
        <LeftSection />
        <RightSection />
      </main>

      <ConsoleSection />
      <CoinSection />
      <Universe />
    </>
  );
}

export default ProductsPage;
