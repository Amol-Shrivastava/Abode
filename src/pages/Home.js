import React from "react";
import Hero from "../components/HeroSection/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import Interior from "../components/InteSection/Interior";

import Products from "../components/Products/Products";

import {
  DesignSectionObj,
  InfoSectionObj,
  InteriorSectionObj,
} from "../data/InfoSectionData";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...InfoSectionObj} />
      <Products />
      <Interior {...InteriorSectionObj} />
      <InfoSection {...DesignSectionObj} />
    </>
  );
};

export default Home;
