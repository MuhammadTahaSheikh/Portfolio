import React from "react";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import Hero2 from "../Components/Hero2/Hero2";

import Navbar from "../Components/Navbar";
import PriceCard from "../Components/Pricecard/PriceCard";
const Project = () => {
  return <div>
   <Navbar/>
   
  <Hero2 heading='PROJECTS.' text='My All Works'/>
  <Card/>
  <PriceCard/>
   <Footer/>
    </div>;
};

export default Project;
