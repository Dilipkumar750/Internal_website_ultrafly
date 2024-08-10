import { useState } from "react";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
import logo from "../../images/ultrafly/ultraflysolutionslog.png";
import { motion, useScroll } from "framer-motion";
import "./nav.css";
import icon from "../../images/our_services/mobileImgs/mobile-service.png";
import icon1 from "../../images/our_services/websiteImg/coding.png";
import icon2 from "../../images/our_services/seo&digital/digital-marketing.png";
import icon3 from "../../images/our_services/websiteImg/expert.png";
import icon0 from "../../images/our_services/websiteImg/software.png";
import "rc-dropdown/assets/index.css";
import Dropdown from "rc-dropdown";
import down_arrow from "../../images/hero/down-arrow.png";
import up_arrow from "../../images/hero/navigate-up-arrow.png";


function Navbar() {
  const { scrollYProgress } = useScroll();
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  // drop down
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);


  // sidebar
  const sideBar = () => {
    setSideBar(!sidebar);
  };

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  // service drop down
  const menu = (
    <ul className=" mt-8 grid grid-flow-row gap-8 md:gap-12 right-0 md:right-10 bg-white ">
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="1">
        <Link to="/software-development" className="flex gap-3">
          <img
            src={icon0}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="software developer"
          />
          Software Development
        </Link>
      </li>
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="2">
        <Link to="/mobile-app-development" className="flex gap-3">
          <img
            src={icon}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Mobile App Development Services"
          />
          Mobile App Development
        </Link>
      </li>
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="3">
        <Link to="/website-development-company" className="flex gap-3">
          <img
            src={icon1}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Professional Website Development"
          />
          Website Development
        </Link>
      </li>
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="4">
        <Link to="/digital-marketing-company" className="flex gap-3">
          <img
            src={icon2}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="SEO and Digital Marketing Services"
          />
          Seo & Digital Marketing
        </Link>
      </li>
      {/* <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="5">
        <Link to="digital">Digital Marketing</Link>
      </li> */}
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="6">
        <Link to="/it-staffing" className="flex gap-3">
          <img
            src={icon3}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Expert IT Staffing Solutions"
          />{" "}
          IT Staffing
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`flex flex-row  items-center justify-between px-4 py-3  md:px-12 fixed bg-white top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-white" : ""
        }`}
      >
        {/* logo */}
        <a href="https://ultraflysolutions.com/">
          <img
            src={logo}
            alt="ultraflysolutions pvt ltd"
            className=" w-20 md:w-[150px]"
          />
        </a>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? "left-0" : "-left-[100%] text-red"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-[#03a4ed] text-4xl cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/about-us"
                  >
                    About
                  </Link>
                </li>
                <li
                  // onClick={hamburgerMenu}
                  className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200 "
                >
                  <Dropdown
                    trigger={["click"]}
                    overlay={menu}
                    animation="slide-up"
                    onVisibleChange={handleVisibleChange}
                  >
                    <button
                      type="button"
                      className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200 flex gap-3"
                    >
                      Our Services
                      {visible ? (
                        <img src={up_arrow} className="pt-[5px]" />
                      ) : (
                        <img src={down_arrow} className="pt-[5px]" />
                      )}
                    </button>
                  </Dropdown>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/careers/web"
                  >
                    Careers
                  </Link>
                </li>
                {/* <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>  */}

                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
                <li
                  onClick={hamburgerMenu}
                  className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                >
                  <Link to="/blog">Blog</Link>
                </li>

                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* sidebar */}
            {/* 
            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                  sidebar ? "left-0" : "-left-[100%] "
                }`}
              >
                <div className="flex justify-between items-center">
                  <img src={logo} alt="logo_img" className="w-3/4" />
                  <i
                    onClick={sideBar}
                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                  ></i>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Ultrafly Solutions Private Limited was founded in 2019 at
                    Coimbatore based company working towards excellence in the
                    Computers, and believe in pursuing business through
                    innovation and technology,
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#E97451]  cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-location-dot text-[#03a4ed]"></i>
                    &nbsp; Girias Upstairs , Thiruchi Road , Coimbatore.
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#E97451] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-phone text-[#03a4ed]"></i>&nbsp;
                    +91 91500 01089
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#E97451] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-envelope text-[#03a4ed]"></i>
                    &nbsp; hr@ultraflysolutions.com
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-[#03a4ed] rounded-full py-[12px] px-[17px] cursor-pointer hover:bg-[#03a4ed]">
                      <a
                        href="https://www.facebook.com/ultraflysolutions"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                      </a>
                    </span>
                    <span className="bg-[#03a4ed] rounded-full py-[12px] px-[12px] cursor-pointer hover:bg-[#03a4ed]">
                      <a href="https://twitter.com/UltraflyS" target="_blank">
                        {" "}
                        <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                      </a>
                    </span>
                    <span className="bg-[#03a4ed] rounded-full py-[10px] px-[13px] cursor-pointer hover:bg-[#03a4ed]">
                      <a
                        href="https://www.instagram.com/ultraflysolutions/"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa-brands text-center fa-instagram text-[2.2rem] text-white"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* hamburger */}
          </div>
          {/* spin box */}
          <div className=" text-[9px] md:text-[14px] font-bold text-blue-500 p-2 text-end ">
            <ul className="list-none">
              <li>
                <a href="">
                  <i class="fa-solid fa-phone"></i> +91 91500 01089


                </a>
              </li>
              <li>
                <a href="mailto:hr@ultraflysolutions.com">
                  <i class="fa-solid fa-envelope"></i> info@ultraflysolutions.com
                </a>
              </li>
            </ul>
          </div>
          <i
            onClick={hamburgerMenu}
            className="fa-bars fa-solid hidden text-[#03a4ed] text-2xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
          ></i>
        </div>
        <motion.div
          className="progress-bar "
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
    </>
  );
}

export default Navbar;
