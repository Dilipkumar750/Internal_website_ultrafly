import React, { useEffect } from "react";
import gif from "../../images/our_services/software_dev/software-development{}-gif.gif";
import icon1 from "../../images/our_services/software_dev/icon-1.png";
import icon2 from "../../images/our_services/software_dev/icon-2.jpg";
import icon3 from "../../images/our_services/software_dev/icon-3.png";
import icon4 from "../../images/our_services/software_dev/icon-4.png";
import icon5 from "../../images/our_services/software_dev/icon-5.png";
import icon6 from "../../images/our_services/software_dev/icon-6.png";
import developmentsoftwareImg from "../../images/our_services/software_dev/development-software.jpg";
import "./services.css";
import SocialMedias from "./SocialMedias";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Software() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
     <HelmetProvider>

<Helmet>
  <title>Software Development Company | Ultrafly Solutions 
  </title>
  <meta name="description" content="Custom software development services by Ultrafly Solutions. We create robust and scalable software solutions tailored to your business needs. 
 " />
  <meta name="keywords" content="software development, custom software, software solutions, Ultrafly Solutions
" />
</Helmet>

</HelmetProvider>
    <div className="mt-[90px]">

      {/* banner */}
      <div className="h-full w-full relative ">
        <div className="software_dev_banner h-screen w-screen flex items-center ">
          <div className="pl-12 md:pl-24">
            <h2 className="text-2xl md:text-3xl lg:text-5xl  text-white font-semibold ">
            Custom Software Development Solutions
            </h2>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 ">
          <div className="">
            <img src={gif} alt="Custom Software Development at UltraFly Solutions" className=" mx-auto w-full md:w-2/4 lg:w-full" />
          </div>
          <div className="lg:col-span-2 grid gap-5">
            <h2 className=" text-xl md:text-5xl font-medium  ">
            Enterprise Software
            </h2>
            <h3 className="text-xl md:text-2xl font-normal ">Software Consulting</h3>
            <p className=" text-base md:text-xl">
              We are experts in developing end to end applications based on web
              technologies. Furthermore, We combine strong technological insight together
              with business visions to deliver you the accurate inputs across
              the product life cycle. We use web technologies like PHP, HTML,
              CSS, JavaScript, .Net and Drupal to deliver on-the-go access via a
              wide range of devices. Our web applications/sites on the web help
              them to be highly flexible while reducing the maintenance costs.
            </p>
            <p className=" text-base md:text-xl">
              Choose the perfect website designing company t o hand over your
              dream projects is the crucial point. It is like you are
              associating with a solid team that you can depend on. With some
              planning and focus, before long you can have a team (designer,
              developer, SEO experts, graphic designers, right sources) to rival
              your biggest competitors, at a fraction of the cost. Once you have
              the team, you have the leverage.
            </p>
          </div>
        </div>
        {/* -------------------6 -----grids  start------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24 px-12 md:px-24 ">
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-32 mx-auto"
              src={icon1}
              alt="System Integration Services by UltraFly Solutions"
            />
            <h5 className="soft_dev_card-title">Front and Back-end Web Apps</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                "Front and Back-end Web Apps: Seamlessly create and manage both
                user interfaces and server-side functionality for web
                applications, ensuring a holistic and efficient development
                approach."
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-32 mx-auto"
              src={icon2}
              alt="System Integration Services by UltraFly Solutions"
            />
            <h5 className="soft_dev_card-title">Custom Software Development</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                "Custom Software Development: Tailored solutions designed to
                meet specific business needs, ensuring operational efficiency
                and flexibility. Our expertise in crafting unique software
                solutions empowers your organization's digital success."
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-32 mx-auto"
              src={icon3}
              alt="System Integration Services by UltraFly Solutions"
            />
            <h5 className="soft_dev_card-title">
              Software Product Development
            </h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                "Software Product Development: The process of designing,
                building, and delivering software products that meet market
                demands and user requirements. We transform ideas into
                innovative, user-friendly, and scalable solutions for your
                digital success."
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-32 mx-auto"
              src={icon4}
              alt="System Integration Services by UltraFly Solutions"
            />
            <h5 className="soft_dev_card-title">
              Full Software Development Outsourcing
            </h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                "Full Software Development Outsourcing: A cost-effective
                solution for outsourcing the entire software development process
                to expert third-party companies, ensuring efficient and
                expert-driven project management."
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-32 mx-auto"
              src={icon5}
              alt="System Integration Services by UltraFly Solutions"
            />
            <h5 className="soft_dev_card-title">
              Software Support and Maintenance
            </h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                "Software Support and Maintenance: Ongoing services to ensure
                smooth software operation, including updates, bug fixes, and
                expert technical assistance for users, ensuring optimal
                performance and reliability."
              </p>
            </div>
          </div>
          <div className="soft_dev_card">
            <img
              className="soft_dev_card-img-top w-32 mx-auto"
              src={icon6}
              alt="System Integration Services by UltraFly Solutions"
            />
            <h5 className="soft_dev_card-title">Big Data and Data Analytics</h5>
            <div className="soft_dev_card-body flex justify-center items-center ">
              <p className=" text-white text-sm md:text-[16px] ">
                "Big Data and Data Analytics: The practice of analyzing vast
                datasets to uncover insights, inform data-driven decisions, and
                gain a competitive edge through data-driven strategies and
                informed business choices."
              </p>
            </div>
          </div>
        </div>
        {/* -------------------6 grids  end------------ */}

        {/*---------------- Types Of Software-- start-------------- */}
        <div className="grid lg:grid-cols-2 gap-10 p-12 md:p-20 ">
          <div className="grid gap-5">
            <h2 className=" text-xl md:text-5xl font-medium ">
              Types Of Software Development Service
            </h2>
            <p className="text-base md:text-xl">
            Software development starts with a line of code, and it spreads like Google to millions of people. It gives you a better solution for a business problem.</p>
            <p className="text-base md:text-xl">
            Businesses encounter numerous challenges in their daily operations. Software development services provide solutions to those problems. Types of software developments are as follows: – </p>

            <ul className=" text-base md:text-xl grid gap-4 list-disc pl-5">
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp;  */}
                Application Software Development
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp;  */}
                System Software Development
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Programming Software Development
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Software Development
              </li>
              <li className="transition-transform  duration-300 hover:text-blue-600 hover:scale-110 hover:font-semibold font-poppins">
                {/* <i className="fa-solid fa-check"></i> &nbsp; */}
                Custom Software Development
              </li>
            </ul>
          </div>
          <div>
            <img src={developmentsoftwareImg} alt="Enterprise Software Solutions" />
          </div>
        </div>
        {/*---------------- Types Of Software-- start-------------- */}

        {/* footer start */}
        <footer className="soft-banner-footer flex flex-col justify-center items-center gap-5 text-center px-4 lg:px-0">
          <h1 className=" text-white text-xl md:text-3xl lg:text-5xl ">
            Let’s Get To Work Together Ready To Work With Us.
          </h1>
        </footer>
        {/* footer end */}
      </div>
    </div>
    
    </>
  );
}

export default Software;
