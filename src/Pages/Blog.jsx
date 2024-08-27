import { Helmet, HelmetProvider } from "react-helmet-async";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Fimg from '../images/blog/first.jpg'
import Simg from '../images/blog/seoblog.jpg'
function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ultrafly Solutions Blog – Latest Tech Insights & Innovations</title>
          <meta
            name="description"
            content="Discover the Ultrafly Solutions blog for expert insights on tech trends, industry innovations, and our cutting-edge solutions. Stay informed and ahead in the digital world."
          />
          <meta
            name="keywords"
            content="Ultrafly Solutions, tech insights, industry innovations, digital solutions, technology trends, business solutions, tech blog"
          />
        </Helmet>
      </HelmetProvider>

      <div>
        <div>
          <h1 className=" text-blue-500 text-center text-3xl md:text-4xl font-bold pb-12 pt-24 w-full">
            ULTRAFLY SOLUTIONS BLOG
          </h1>
          <p className="px-10 sm:px-24 pb-10 md:pb-10">Welcome to the Ultrafly Solutions blog! Here, we explore the latest in tech innovations, industry trends, and our groundbreaking solutions designed to elevate your business. Stay tuned for insights, updates, and expert advice to help you stay ahead in the fast-paced digital world.</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-10 sm:px-24 gap-8 ">
          <Link to='/FirstBlog'>
            <div class="w-full rounded overflow-hidden shadow-2xl p-4">
              <img class="w-full" src={Fimg} alt="Unlocking the Future" />
              <div class=" py-4">
                <h2 class="font-bold text-xl">Unlocking the Future:</h2>
                <p class="text-gray-700 text-base">
                How Ultrafly Solutions is Shaping the Next Generation of Technology
                </p>
              </div>
            </div>
          </Link>
          <Link to='/SecondBlog'>
            <div class="w-full rounded overflow-hidden shadow-2xl p-4">
              <img class="w-full" src={Simg} alt="Unlocking the Future" />
              <div class=" py-4">
                <h2 class="font-bold text-xl">Unlocking Success:</h2>
                <p class="text-gray-700 text-base">
                Why SEO Is Important in Business and How Leverage It Today!
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Blog;
