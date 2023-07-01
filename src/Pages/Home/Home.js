import React from "react";
import Hero from "../Hero/Hero";
import Featured from "../Featured/Featured";
import OurProducts from "../OurProducts/OurProducts";
import BestSeller from "../BestSeller/BestSeller";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
import LocationStore from "../Location/LocationStore";
const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <OurProducts />
      <BestSeller />
      <OurServices />
      <Testimonials />
      <LocationStore />
    </div>
  );
};

export default Home;
