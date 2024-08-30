import React, { useEffect, useState } from 'react';
import Fimg from '../../images/blog/first.jpg';
import { Link } from "react-router-dom";
import logo from "../../images/ultrafly/ultraflysolutionslog.png";
import projexticon from "../../images/ultrafly/projection.png";
import clients from "../../images/ultrafly/clients.png";
import customerservice from "../../images/ultrafly/customer service.png";
import CountUp from "react-countup";
import { FaEye } from 'react-icons/fa';
import { Helmet, HelmetProvider } from "react-helmet-async";

function UnlockingFuture() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Mock fetching the number of views (this would be fetched from a database or an API in a real-world scenario)
    const fetchViews = async () => {
      const viewsData = 1374; // Example number of views
      setViews(viewsData);
    };

    fetchViews();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology</title>
          <meta property="og:title" content="Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology" />
          <meta property="og:description" content="Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions." />
          <meta property="og:image" content={Fimg} />
          <meta property="og:url" content="https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation" />
          <meta property="og:type" content="article" />
        </Helmet>
      </HelmetProvider>

      <div className='mt-28 px-4 md:px-10 lg:px-46 grid gap-4 ml-6'>
        {/* Image and Text Section */}
        <div className='grid md:grid-cols-3 gap-3 pr-10'>
          <div className='col-span-2 grid justify-center gap-2'>
            <div className='flex items-center'>
              <h1 className='text-2xl md:text-[30px] font-bold text-justify'>
                Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology
              </h1>
            </div>
            <div className='flex items-center justify-end ml-4'>
              <FaEye className='text-gray-600 mr-2' />
              <span className='text-lg md:text-xl font-semibold text-gray-600'>{views} Views</span>
            </div>

            <img
              src={Fimg}
              alt="Unlocking the Future"
              className='h-[30vh] object-cover md:h-[50vh] p-2 w-full' // Decreased size
            />
            <p className='text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto'>
              At Ultrafly Solutions, we're at the forefront of the digital revolution, harnessing the power of the latest web development technologies to drive innovation and transform businesses. Our focus on cutting-edge tools and frameworks ensures that we deliver state-of-the-art solutions tailored to meet the dynamic needs of today’s digital landscape.
            </p>
            <p className='text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto'>
              We utilize advanced technologies such as React and Vue.js for creating interactive, high-performance user interfaces and Node.js and GraphQL for building scalable, efficient back-end systems. Our expertise in serverless architecture and cloud-native development allows us to offer flexible, cost-effective solutions that can adapt to any business requirement.
            </p>
            <p className='text-base md:text-xl font-medium text-justify max-w-[60rem] w-full mx-auto'>
              In this blog, we’ll explore how Ultrafly Solutions integrates these modern technologies to push the boundaries of what’s possible, showcasing our latest projects, success stories, and the innovations that are driving the future of web development. Join us as we unlock new potential and shape the digital world with the latest advancements.
            </p>

            {/* Social Media Icons Section */}
            <div className="flex justify-center md:justify-start gap-6 text-[18px] text-[#646464] mt-8">
              <h1 className='text-blue font-bold'><u>Share Our Blog:</u></h1>
              <br />
              <a
href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation')}&quote=${encodeURIComponent('Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology')}&hashtag=${encodeURIComponent('#UltraflySolutions')}`}
target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl"></i>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology')}&url=${encodeURIComponent('https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation')}&hashtag=${encodeURIComponent('#UltraflySolutions')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter p-3 rounded-full icon text-sm md:text-xl sm:p-[18px]"></i>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.ultraflysolutions.com/ultrafly-solutions-driving-tech-innovation')}&title=${encodeURIComponent('Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology')}&summary=${encodeURIComponent('Explore how Ultrafly Solutions is driving success for businesses worldwide with cutting-edge technology solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in p-3 rounded-full sm:p-[18px] icon text-sm md:text-xl"></i>
              </a>
            </div>

          </div>

          {/* Sticky Position Let's Connect Div */}
          <div className='sticky top-24 self-start md:w-[24rem] p-8 ml-4'>
            <div className="border-2 border-gray-300 bg-gradient-to-r from-blue-100 to-blue-900 p-6 rounded-lg">
              <img src={logo} alt="logo" className="w-5px" />
              <p className='text-center font-bold text-xl mt-4 text-black'>
                Let's connect! Explore more about IT solutions.
              </p>
              <Link to="/contact-us">
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block mt-2">
                  Check & Demo
                </button>
              </Link>
              {/* About Section inside the div */}
              <div className='mt-10'>
                <About />
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

function About() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4 px-4">
      <div className="flex items-center">
        <img
          src={projexticon}
          alt="About Us | Ultrafly Solutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={150}
              duration={15}
              separator=" "
              decimal=","
              suffix=" +"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Completed <br /> Projects
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <img
          src={clients}
          alt="icon_img ultraflysolutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={91}
              duration={20}
              separator=" "
              decimal=","
              suffix=" +"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Happy <br /> Clients
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <img
          src={customerservice}
          alt="icon_img ultraflysolutions"
          className="w-[3rem] h-auto mr-2"
        />
        <div className="text-left">
          <h2 className="uppercase font-bold text-[15px] leading-snug text-white">
            <CountUp
              end={110}
              duration={15}
              separator=" "
              decimal=","
              suffix="+"
            />
          </h2>
          <h3 className="uppercase font-bold text-[15px] leading-snug">
            Customer <br /> Service
          </h3>
        </div>
      </div>
    </div>
  );
}

export default UnlockingFuture;
