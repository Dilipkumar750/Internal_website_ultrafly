import React, { useRef } from "react";
import AboutCarts from "./AboutCarts";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlWind from "../../images/who-we-are/wind.png";
import MainButton from "../MainButton";
import projexticon from "../../images/ultrafly/projection.png";
import clients from "../../images/ultrafly/clients.png";
import customerservice from "../../images/ultrafly/customer service.png";
import CountUp from "react-countup";

function About() {
  const countUpRef = useRef(null);
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-10">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          {/* text-img div */}
          <div id="about" className=" grid md:grid-cols-3">
            {/* about text */}
            <div
              data-aos="fade-right"
              className="mt-[10.5rem] relative col-span-2 "
            >
              {/* <div className=" relative w-80">
                <p className="w-full absolute text-white text-center ml-4 mt-2 uppercase font-medium z-10 text-xl">
                  find your energy
                </p>
                <img
                  src={TitleRed}
                  alt="text_bg"
                  className=" w-full "
                />
              </div> */}
             <div>
                <h2 className=" text-2xl md:text-[32px] font-bold leading-tight mb-6">
                Innovative Technology Solutions for Your Business
                </h2>
                <p className="text-base md:text-xl text-[#646464]">
                Ultrafly Solutions Private Limited was founded in 2019 as a Coimbatore-based company working towards excellence in computers and believing in pursuing business through innovation and technology.
                  <br />
                  <br />
                  Our fields of expertise include software development, web development, mobile app development, search engine optimization, and digital marketing and recruitment services. Our global clients come from a wide spectrum of industries with varying requirements.
                </p>
             </div>
              {/* about text icons */}
              <div className=" grid md:grid-cols-3 ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7">
                  <img
                    src={projexticon}
                    alt="About Us | Ultrafly Solutions Meta "
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h2 className="uppercase font-bold text-[50px] leading-snug">
                    <CountUp
                      end={150}
                      duration={20}
                      separator=" "
                      decimal=","
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    />
                  </h2>

                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Completed <br /> Projects
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid max-md:border-t max-md:border-b md:border-l md:border-r  border-[rgb(0,0,0,0.2)] py-10 px-14 min620:px-0 min620:border-none">
                  <img
                    src={clients}
                    alt="icon_img ultraflysolutions"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h2 className="uppercase font-bold text-[50px] leading-snug">
                    <CountUp
                      end={91}
                      duration={30}
                      separator=" "
                      decimal=","
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Happy <br /> Clients
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <img
                    src={customerservice}
                    alt="About Us | Ultrafly Solutions Meta "
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h2 className="uppercase font-bold text-[50px] leading-snug">
                    <CountUp
                      end={110}
                      duration={25}
                      separator=" "
                      decimal=","
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Customer <br />
                    Service
                  </h3>
                </div>
              </div>
              {/* cta button */}
            </div>
            {/* img side */}
            <div className="relative">
              <img
                src={GirlRunning}
                alt="About Us | Ultrafly Solutions Meta "
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg ultraflysolutions" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind ultraflysolutions" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
