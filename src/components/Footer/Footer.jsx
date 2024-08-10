import { Link } from "react-router-dom";
import logo from "../../images/ultrafly/ultraflysolutionslog.png";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[5rem] md:py-[10rem]">
          {/* footer div all */}
          {/* flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left */}
          <div className="grid  md:grid-cols-4 gap-4 justify-center items-center md:justify-start md:items-start ">
            {/* logo side */}
            <div className="flex flex-col gap-4 md:col-span-2 order-last md:order-none">
              <img
                src={logo}
                alt="UltraFly Solutions - Your Partner in Digital Transformation"
                className="w-[20rem] max-sm:mx-auto"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                No.1510-H, Sri Complex, 2rd Floor, Trichy Road, (Girias
                Upstairs), Coimbatore-641018
              </p>
              {/* socials */}
              <div className="flex max-md:justify-between md:gap-6 text-[18px] text-[#646464]">
              <a
                href="https://www.facebook.com/ultraflysolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f bg-[#efefef] p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl "></i>
              </a>
              <a
                href="https://twitter.com/UltraflyS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter bg-[#efefef] p-3 rounded-full icon text-sm md:text-xl  sm:p-[18px]"></i>
               </a>
               <a
                href="https://www.linkedin.com/company/ultraflysolutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin bg-[#efefef] p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl "></i>
               </a>
               <a
                href="https://www.instagram.com/ultraflysolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram bg-[#efefef] p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl "></i>
               </a>
               <a
                href="https://maps.app.goo.gl/71s6HBEkSHk7FwZz8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot bg-[#efefef] p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl "></i>
               </a>
               <a
                  href="https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube bg-[#efefef] p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl "
                  ></i>
                </a>
              </div>

              <p className="text-[16px] font-medium text-[#646464] ">
                <a href="https://ultraflysolutions.com/">
                  {" "}
                  © {new Date().getFullYear()} Ultraflysolutions All Rights
                  Reserved.
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className=" flex justify-center items-center">
              <div className="flex flex-col gap-4 relative">
                <p className="text-[22px] font-bold footer-main">
                  Our Services
                </p>

                <span className="flex flex-col gap-4 top-[33px] absolute w-[12rem] h-[4px] bg-[#466ce9]"></span>

                <Link to="/software-development">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Software Development
                  </p>
                </Link>
                <Link to="mobile-app-development">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Mobile App Development
                  </p>
                </Link>
                <Link to="/website-development-company">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Website Development
                  </p>
                </Link>
                <Link to="/digital-marketing-company">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    SEO & Digital Marketing
                  </p>
                </Link>
                <Link to="/it-staffing">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    IT Staffing
                  </p>
                </Link>
              </div>
            </div>

            {/* right div */}
            <div className=" flex justify-center items-center">
              <div className="flex flex-col gap-4 relative">
                <p className="text-[22px] font-bold footer-main">
                  Working Hours
                </p>
                <span className="top-[33px] absolute w-[12rem] h-[4px] bg-[#466ce9]"></span>
                <p className="text-[16px]  text-[#646464] font-bold">
                  Monday - Friday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  9:30am - 6:30pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold">
                  Saturday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  9.30am - 5:30pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold ">
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
