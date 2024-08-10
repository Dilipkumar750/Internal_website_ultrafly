import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Link
          to="/careers/web"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] hover:bg-[#3f4ae4] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Web Development
        </Link>

        <Link
          to="/careers/app"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] bg-[#325be2] ease-in duration-200 hover:shadow-2xl text-white "
        >
          App Development
        </Link>

        <Link
          to="/careers/seo"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] hover:bg-[#4e4bec] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          SEO Optimization
        </Link>

        <Link
          to="/careers/digital"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] hover:bg-[#4555e2] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Digital Marketing
        </Link>

        <Link
          to="/careers/hr"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] hover:bg-[#3759c9] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Human Resurces
        </Link>

        <Link
          to="/careers/business"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] hover:bg-[#3639d8] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Business Development
        </Link>

        <Link
          to="/careers/more"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[10px] px-[32px] rounded-[23px] hover:bg-[#4954ec] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          More
        </Link>
      </div>

      {/* ---- */}
      <h1 className="text-black text-center text-2xl md:text-3xl font-bold pt-12 md:pt-24">
      Current Openings
      </h1>
      {/* boxes */}
      <div className="mt-[2rem] md:mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex justify-between w-full flex-col text-center md:flex-row md:text-start">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
               Job
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Application Testing</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Automations
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Exerience</p>
              <p className="text-[18px] text-black font-bold mt-3">
                1 Year
              </p>
            </li>
           
            <li className="bg-[#f2f2f2] w-full flex justify-center items-center pb-4">
              <a
              
                href="https://www.linkedin.com/jobs/view/3893600947" 
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#483de4] ease-in duration-200  " target="_blank"
              >
                Apply Now
              </a>
            </li>
            

          </ul>

       
        </div>
      </div>
    </>
  );
}

export default App;
