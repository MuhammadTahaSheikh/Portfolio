import React from "react";
import Footer from "../Components/Footer/Footer";
import Hero2 from "../Components/Hero2/Hero2";

import Navbar from "../Components/Navbar";

const About = () => {
  return <div>
       <Navbar />
      <Hero2 heading='About.' text='Im a Friendly Front-End React Developer' />
      <Footer/>
    </div>;
};

export default About;
