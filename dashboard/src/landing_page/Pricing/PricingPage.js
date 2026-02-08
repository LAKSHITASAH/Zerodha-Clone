// src/Pricing/PricingPage.js
import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import ChargesTable from "./ChargesTable";
import AccountCharges from "./AccountCharges";
import ChargesExplained from "./ChargesExplained";

const PricingPage = () => {
  return (
    <>
      <Hero />
      <Brokerage />
      <ChargesTable />
      <AccountCharges />
      <ChargesExplained />
    </>
  );
};

export default PricingPage;
