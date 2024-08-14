import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GirlRunning from "../images/who-we-are/girl-run.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import GirlWind from "../images/who-we-are/wind.png";
import MainButton from "../components/MainButton";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Target from "../images/AboutPage/target.png";
import Mountain from "../images/AboutPage/mountain.png";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Us | Ultrafly Solutions</title>
          <meta name="description" content="Learn more about Ultrafly Solutions, our mission, values, and the expert team driving innovative IT solutions for businesses worldwide." />
          <meta name="keywords" content="about Ultrafly Solutions, IT company, tech solutions, company mission, expert team" />
        </Helmet>
      </HelmetProvider>
      <section className="login-section">
        <div className="container page-padding">
          <h1 className="text-blue-500 text-center text-3xl md:text-4xl font-bold pt-24 pb-12">
            ABOUT ULTRAFLY SOLUTIONS
          </h1>
          <div className="grid md:grid-cols-3">
            <div className="flex flex-col !text-left relative items-right justify-center col-span-2">
              <h2 className="text-black text-2xl md:text-3xl uppercase font-bold py-4">
                Our Mission and Vision
              </h2>
              <h2 className="text-1xl md:text-2xl max-w-[53rem] font-bold mb-4">
                Who We Are
              </h2>
              <p className="text-[#646464] font-medium text-[15px] text-justify max-w-[50rem]">
                At UltraFly Solutions, we are a dynamic and innovative IT solutions provider committed to delivering cutting-edge technology services to businesses worldwide. Founded on the principles of excellence and innovation, our team of skilled professionals brings years of experience and a passion for technology to every project we undertake.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-sky-400`}
                goTo="/contact-us"
                text="Meet the Team"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
                data-aos="fade-up"
              />
            </div>
            <div className="relative">
              <img src={GirlRunning} alt="Girl Running" className="girl-running" />
              <img src={GirlRedBg} alt="Girl Red Background" className="girl-bg" />
              <img src={GirlWind} alt="Girl Wind" className="girl-wind" />
            </div>
          </div>
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-80 md:h-[43rem] flex flex-col justify-center items-center text-center px-4" data-aos="fade-right">
                <img src={Target} alt="Our Mission" className="w-1/3 md:w-[9rem] transition duration-300 transform hover:rotate-6" />
                <h3 className="text-[16px] md:text-[36px] font-bold md:mt-3">
                  Our Mission
                </h3>
                <p className="text-[8px] md:text-[16px] font-medium text-[#646464] md:mt-5">
                  Our mission is to empower businesses by providing them with state-of-the-art technology solutions that drive growth, enhance efficiency, and improve their competitive edge. We strive to understand the unique challenges faced by our clients and offer tailored solutions that meet their specific needs.
                </p>
              </div>
              <div className="w-full bg-white h-80 md:h-[43rem]" data-aos="fade-left">
                <img src={Img3} alt="UltraFly Solutions Office" className="w-full h-full object-cover bg-center" />
              </div>
              <div className="w-full bg-white h-80 md:h-[43rem]" data-aos="fade-right">
                <img src={Img4} alt="About Image" className="w-full h-full object-cover bg-center" />
              </div>
              <div className="w-full bg-white h-80 md:h-[43rem] flex flex-col justify-center items-center text-center px-4" data-aos="fade-left">
                <img src={Mountain} alt="Our Vision" className="w-1/3 md:w-[9rem] transition duration-300 transform hover:rotate-6" />
                <h2 className="text-[16px] md:text-[36px] font-bold md:mt-3">
                  Our Vision
                </h2>
                <p className="text-[8px] md:text-[16px] font-medium text-[#646464] mt-5">
                  We envision a world where technology seamlessly integrates with business operations, creating opportunities for unprecedented growth and success. At UltraFly Solutions, we aim to be at the forefront of this transformation, continually pushing the boundaries of what's possible with technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
