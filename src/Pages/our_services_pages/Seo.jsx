import React, { useEffect } from "react";
import gif from "../../images/our_services/seo&digital/dig-mar-gif-b-unscreen.gif";
import icon1 from "../../images/our_services/seo&digital/dig-mar-icon-1.png";
import icon2 from "../../images/our_services/seo&digital/dig-mar-icon-2.png";
import icon3 from "../../images/our_services/seo&digital/dig-mar-icon-3.png";
import icon4 from "../../images/our_services/seo&digital/dig-mar-icon- 4.png";
import icon5 from "../../images/our_services/seo&digital/dig-mar-icon-5.png";
import icon6 from "../../images/our_services/seo&digital/dig-mar-icon-6.png";
import developmentsoftwareImg from "../../images/our_services/seo&digital/seo.jpg";
import "./services.css";
import { Link } from "react-router-dom";
import SocialMedias from "./SocialMedias";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Seo() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <HelmetProvider>

<Helmet>
  <title>SEO & Digital Marketing | Ultrafly Solutions </title>
  <meta name="description" content="Boost your online presence with our SEO and digital marketing services. Ultrafly Solutions helps your business reach its full potential. 
 " />
  <meta name="keywords" content="SEO, digital marketing, online presence, search engine optimization, Ultrafly Solutions
" />
</Helmet>

</HelmetProvider>
    <div className="mt-[90px]">

      {/* banner */}
      <div className="h-full w-full relative ">
        <div className="software_dev_banner h-screen w-screen flex items-center ">
          <div className="pl-12 md:pl-24 ">
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
            Result-Driven SEO & Digital Marketing Services
            </h2>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 ">
          <div>
            <img src={gif} alt="SEO Analysis and Strategy" className="mx-auto w-full md:w-2/4 lg:w-full" />
          </div>
          <div className="lg:col-span-2 ">
            <h2 className=" text-xl md:text-5xl font-medium  mb-2 md:mb-4">Local SEO</h2>
            <p className="  text-base md:text-xl">
            In Ultrafly Solutions social media marketing, you use popular social media networks to achieve your marketing and branding goals. Social media marketing isn't just about creating a business account and posting whenever you want. You need to develop a strategy with measurable goals that includes.
            </p>
          </div>
        </div>
        {/* -------------------6 -----grids  start------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24 p-12 md:p-20 ">
          <div className="soft_dev_card ">
            <img
              className="soft_dev_card-img-top w-44 mx-auto"
              src={icon1}
              alt="Social Media Marketing on Various Platforms"
            />
            <h5 className="soft_dev_card-title">Improved Customer Reach</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                To improve customer reach, leverage data-driven marketing
                strategies, embrace social media advertising, optimize your
                website for search engines, and create engaging, shareable
                content.
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-44 mx-auto"
              src={icon2}
              alt="Pay-Per-Click Advertising Campaign"
            />
            <h5 className="soft_dev_card-title">
              Completing a Competitor Analysis
            </h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                Conduct a thorough competitor analysis by identifying key
                competitors, assessing their strengths and weaknesses, analyzing
                their market positioning, and determining opportunities and
                threats to inform your strategic decisions.
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-44 mx-auto"
              src={icon3}
              alt="soft_dev_card image cap"
            />
            <h5 className="soft_dev_card-title">High Search Ranking</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                Achieving a high search ranking involves optimizing your website
                for search engines, using relevant keywords, creating quality
                content, acquiring backlinks, and ensuring a mobile-friendly and
                user-friendly experience to improve visibility and traffic.
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-44 mx-auto"
              src={icon4}
              alt="soft_dev_card image cap"
            />
            <h5 className="soft_dev_card-title">Increased Profitability</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                Increasing profitability requires a focus on cost management,
                pricing strategies, revenue growth, and operational efficiency.
                Regularly analyze financial data, identify profit drivers, and
                implement strategies to enhance margins and reduce expenses.
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-44 mx-auto"
              src={icon5}
              alt="soft_dev_card image cap"
            />
            <h5 className="soft_dev_card-title">Complete Brand Control</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                Complete brand control necessitates a strong brand strategy,
                brand guidelines, and vigilant monitoring. This includes
                consistent messaging, visual identity, and legal protection to
                maintain brand integrity and equity across all touchpoints.
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-44 mx-auto"
              src={icon6}
              alt="soft_dev_card image cap"
            />
            <h5 className="soft_dev_card-title">Multiple Branding Option</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                Offering multiple branding options involves diversifying your
                brand portfolio, creating distinct sub-brands or product lines,
                and tailoring marketing strategies to different target audiences
                or market segments to capture a wider range of customers.
              </p>
            </div>
          </div>
        </div>
        {/* -------------------6 grids  end------------ */}

        {/*---------------- Types Of Software-- start-------------- */}
        <div className="grid lg:grid-cols-2 gap-10 p-12 md:p-20 ">
          <div className="grid gap-5">
            <h2 className=" text-2xl md:text-5xl font-medium ">Social Media Marketing</h2>
            <p className="text-base md:text-xl">
            Digital marketing content is a pivotal tool for online success. It encompasses various forms, from blog posts and videos to social media updates and email campaigns. Effective content resonates with your audience, delivers value, and aligns with your brand's message. It leverages SEO strategies for visibility and engages users on social platforms.
            </p>
            <h2 className=" text-xl md:text-5xl font-medium ">We Also Offer</h2>
            <ul className="text-base md:text-xl grid gap-4 list-disc pl-5 ">
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Search Engine Optimization (SEO)
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Social Media Marketing
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Content Marketing
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Graphic Designing
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Branding
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                WhatsApp and Email Marketing
              </li>
            </ul>
          </div>
          <div>
            <img src={developmentsoftwareImg} alt="Digital" />
          </div>
        </div>
        {/*---------------- Types Of Software-- start-------------- */}

        {/* footer start */}
        <footer className="soft-banner-footer flex flex-col justify-center items-center gap-5 text-center px-4 lg:px-0">
          <h1 className=" text-white text-xl md:text-3xl lg:text-5xl  ">
            Let’s Get To Work Together Ready To Work With Us.
          </h1>
        </footer>
        {/* footer end */}
      </div>
    </div>
    </>
  );
}

export default Seo;
