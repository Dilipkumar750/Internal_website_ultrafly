import React, { useEffect } from 'react';
import Fimg from '../../images/blog/first.jpg';
import book from '../../images/blog/images.jpg';
import { Link } from "react-router-dom";
import logo from "../../images/ultrafly/ultraflysolutionslog.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function FirstBlog() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology </title>
          <meta
            name="description"
            content=" Discover how Ultrafly Solutions is pioneering the next generation of technology with innovative solutions in mobile app development, web development, and IT services. Learn how we’re unlocking the future and driving success for businesses worldwide. "
          />
          <meta
            name="keywords"
            content="website development, responsive websites, web design, Ultrafly Solutions"
          />
        </Helmet>
      </HelmetProvider>
    <div className='mt-24 px-10 md:px-36 grid gap-4'>
      <h1 className='text-2xl md:text-[30px] font-bold text-justify max-w-[55rem]' >
        Unlocking the Future: How Ultrafly Solutions is Shaping the Next Generation of Technology
      </h1>
      {/* Image and Text Section */}
      <div className='flex items-center justify-between'>
        <img src={Fimg} alt="Unlocking the Future" className='h-[60vh] p-3 w-[71%]' />
        <div className="relative border-2 border-gray-300 bg-gradient-to-r from-blue-100 to-blue-900 p-6 w-[25%] h-[80%] flex flex-col justify-between rounded-lg">
  <img src={logo} alt="logo" className="absolute top-4 left-4 w-[45%]" />
  <p className='text-center font-bold text-xl mt-24 text-black '>
    Let's connect! Explore more about IT solutions.
               </p>
                 <Link to="/contact-us">
                         <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 absolute bottom-4 right-2">
                   Contact us
                </button>
            </Link>
          </div>
        </div>
      <p className='text-base md:text-xl font-medium text-justify max-w-[60rem]' style={{ width: '70%' }}>
        At Ultrafly Solutions, we're at the forefront of the digital revolution, harnessing the power of the latest web development technologies to drive innovation and transform businesses. Our focus on cutting-edge tools and frameworks ensures that we deliver state-of-the-art solutions tailored to meet the dynamic needs of today’s digital landscape.
      </p>
      <p className='text-base md:text-xl font-medium text-justify max-w-[60rem]' style={{ width: '70%' }}>
        We utilize advanced technologies such as React and Vue.js for creating interactive, high-performance user interfaces and Node.js and GraphQL for building scalable, efficient back-end systems. Our expertise in serverless architecture and cloud-native development allows us to offer flexible, cost-effective solutions that can adapt to any business requirement.
      </p>
      <p className='text-base md:text-xl font-medium text-justify max-w-[60rem]' style={{ width: '70%' }}>
        In this blog, we’ll explore how Ultrafly Solutions integrates these modern technologies to push the boundaries of what’s possible, showcasing our latest projects, success stories, and the innovations that are driving the future of web development. Join us as we unlock new potential and shape the digital world with the latest advancements.
      </p>
    </div>
    </>
  );
}


export default FirstBlog;
