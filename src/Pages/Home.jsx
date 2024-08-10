import React, { useEffect } from "react";
import About from "../components/About/About";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
import NewTestimonials from "../components/Testimonials/NewTestimonials";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs /> 
      {/* <NewTestimonials /> */}
    </>
  );
}

export default Home;
