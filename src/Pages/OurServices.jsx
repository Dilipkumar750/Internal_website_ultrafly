import React, { useEffect } from "react";

import TitleRed from "../images/who-we-are/title-bg.svg";
import sw from "../images/who-we-are/sw.png";
import mobapp from "../images/who-we-are/mobile.png";
import web from "../images/who-we-are/web.png";
import seo from "../images/who-we-are/seo.png";
import staffing from "../images/who-we-are/staffing.png";
import digital from "../images/who-we-are/digital.png";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section>
        <div className="row mt-[90px] w-[100%] overflow-x-hidden">
          <p className="absolute over  font-semibold text-[21px] uppercase md1000:text-[18px] z-10  text-center w-full mt-[29px] pr-[40px] text-white">
            Our Services
          </p>
          <img
            src={TitleRed}
            // data-aos="fade-left"
            alt="text_bg"
            className="w-[20%]   relative mx-auto text-center -top-[6px] md1000:w-[22rem] py-[30px] "
          />
        </div>
        <div className="row overflow-hidden w-[100%]">
          <div className="column overflow-hidden w-[100%]">
            <div className="card">
              <div className="icon-wrapper">
                <img className="w-[60px]" src={sw} alt="software developer" />
              </div>
              <h3 className="serviceh3">Software Development</h3>
              <p>
                Developers leverage their expertise in coding, problem-solving,
                and project management to deliver customized solutions. They
                work on diverse projects, ensuring high-quality, scalable, and
                user-friendly software.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="w-[60px]"
                  src={mobapp}
                  alt="Mobile App Development Services"
                />
              </div>
              <h3 className="serviceh3">Mobile App Development</h3>
              <p>
                Mobile app development involves creating, testing, and
                maintaining apps for various mobile platforms such as iOS and
                Android. Developers use programming languages and frameworks
                like Swift, Kotlin, and React Native to build user-friendly and
                functional apps. They collaborate with clients to understand
                their requirements and deliver customized solutions.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="w-[60px]"
                  src={web}
                  alt="Professional Website Development"
                />
              </div>
              <h3 className="serviceh3">Website Development</h3>
              <p>
                Developers create responsive and user-friendly sites using
                various technologies like HTML, CSS, JavaScript, and CMS
                platforms. They work closely with clients to understand their
                needs, ensuring a tailored and effective online presence.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img className="w-[60px]" src={seo} alt="SEO Services" />
              </div>
              <h3 className="serviceh3">Seo Optimizations</h3>
              <p>
                SEO specialists analyze and implement strategies to drive
                organic traffic and improve site performance. They collaborate
                with clients to understand their goals and tailor their approach
                accordingly. Strong analytical skills and up-to-date knowledge
                of SEO best practices are essential for delivering effective
                results.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="w-[60px]"
                  src={digital}
                  alt="Digital Marketing Services"
                />
              </div>
              <h3 className="serviceh3">Digital Marketing</h3>
              <p>
                Marketers develop targeted campaigns to increase brand
                awareness, engagement, and conversions. They work closely with
                clients to understand their goals and tailor marketing efforts
                accordingly. Strong analytical skills and creativity are
                essential to optimize campaigns and deliver measurable results.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="w-[60px]"
                  src={staffing}
                  alt="Expert IT Staffing Solutions"
                />
              </div>
              <h3 className="serviceh3">IT Staffing</h3>
              <p>
                Staffing specialists identify, recruit, and place candidates in
                roles such as developers, network engineers, and system
                administrators. They work closely with clients to understand
                their specific requirements and ensure the best fit. Effective
                communication and a deep understanding of the IT industry are
                essential for delivering successful staffing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
