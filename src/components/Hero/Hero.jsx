import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "../MainButton";
import whatsapp from "../Hero/whatsapp.png";
import SocialMedias from "../../Pages/our_services_pages/SocialMedias";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './hero.css'


function Hero() {
  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1 })
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ultrafly Solutions | Software Development Company</title>
          <meta
            name="description"
            content="Discover cutting-edge IT solutions with Ultrafly Solutions. From mobile app development to digital marketing, we help your business soar to new heights. "
          />
          <meta
            name="keywords"
            content="IT solutions, mobile app development, digital marketing, website development, Ultrafly Solutions"
          />
        </Helmet>
      </HelmetProvider>
      <section
        id="home"
        className="hero-section flex justify-center items-center "
      >
        <div className="">
          {/* hero section */}
            <div  className="flex flex-col text-white gap-10" id="cta">
            <div className=" relative mb-3">
              <p className="w-2/5 md:w-80  text-black text-[10px] md:text-[14px] lg:text-[16px] uppercase font-medium  z-10  mb-8 text-center absolute mt-2">
                find your energy
              </p>
              <img
                src={TitleBg}
                alt="ultrafly solutions"
                className="w-2/5 md:w-80  absolute  title-white  "
              />
            </div>
            <h1 className="font-bold text-[16px] md:text-[20px] lg:text-[30px] uppercase">
              Welcome to UltraFly Solutions <br />
              <span className="font-thin">
                Your Partner in Digital Transformation
              </span>
            </h1>
            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="Contact Us"
              goTo="/contact-us"
              width={`w-40`}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
