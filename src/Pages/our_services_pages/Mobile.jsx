import React, { useEffect } from "react";
import "./services.css";
import SocialMedias from "./SocialMedias";
import { Link } from "react-router-dom";
import gif1 from "../../images/our_services/mobileImgs/mobile-app (1).gif";
import gif2 from "../../images/our_services/mobileImgs/android_app_dev_lt-removebg-preview.png";
import gif3 from "../../images/our_services/mobileImgs/iphone-application-development.webp";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Mobile() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mobile App Development | Ultrafly Solutions</title>
          <meta
            name="description"
            content="Get top-notch mobile app development services with Ultrafly Solutions. We create intuitive and engaging apps to enhance your business's digital presence.  "
          />
          <meta
            name="keywords"
            content="mobile app development, app design, app development services, Ultrafly Solutions"
          />
        </Helmet>
      </HelmetProvider>
      <div className="mt-[90px]">
        {/* banner */}
        <div className="h-full w-full relative ">
          <div className="software_dev_banner h-screen w-screen flex items-center ">
            <div className="pl-12 md:pl-24 ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold">
              Custom Mobile App Development Services
              </h1>
            </div>
          </div>
        </div>

        <div className=" ">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 ">
            <div>
              <img
                src={gif1}
                alt="iOS and Android App Development"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="lg:col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium  ">
              iOS and Android App Development
              </h2>
              <h3 className="text-xl md:text-2xl font-normal  ">Native and Cross-Platform Apps</h3>
              <p className="text-base md:text-xl">
              Mobile apps have become an integral part of our daily lives, providing convenience, entertainment, and efficiency. Whether you're a startup, a small business, or a large enterprise, having a mobile app can help you reach a wider audience and enhance customer engagement. In today's fast-paced digital world, mobile apps have transformed the way we live and do business.
              </p>
              <p className="text-base md:text-xl ">
              Android app development has become very popular and the most widely used of its kind at the moment. With such a large force of change, it's obvious that there will be a lot of mixed perspectives within it. We understand the transformative power of mobile apps.              </p>
            </div>
          </div>
          {/* second */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 min620:grid-cols-1">
            <div className="col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium  ">
              User-Centric Design
              </h2>
              <h3 className="text-xl md:text-2xl font-normal  ">UI/UX Design</h3>
              <p className="text-base md:text-xl">
              Developing applications for Android devices involves creating software for a range of gadgets,
               including smartphones, tablets, smartwatches, and more.
                To build Android apps, one must be proficient with the Android platform,
               utilize the correct tools, and adhere to industry best practices.</p>
              <p className="text-base md:text-xl text-justify ">
              The field of Android app development has surged in popularity,
              becoming the leading platform of its kind. Given its significant impact, 
              we anticipate diverse opinions and approaches within this space.
              We recognize the revolutionary potential of mobile applications.
              </p>
            </div>
            <div>
              <img
                src={gif2}
                alt="User-Centric Mobile App Design"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
          </div>
          {/* third */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 min620:block">
            <div>
              <img
                src={gif3}
                alt="Mobile App Development Process at UltraFly Solutions"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="col-span-2 ">
              <h2 className="text-2xl md:text-3xl font-medium ">
              App Maintenance and Support
              </h2>
              <h3 className="text-xl md:text-2xl font-normal my-2 md:my-4 ">Post-Launch Support</h3>
              <p className="text-base md:text-xl">
              We are a leading iOS app development company that provides on-time and quality iPhone app development services through its qualified development team. Our team of expert developers and designers analyzes client requirements, whereas our R&D team provides useful marketing insights and technology suggestions to help clients launch a user-friendly iPhone or iPad app successfully in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
