import React from "react";
import { Link } from "react-router-dom";
 
function Bd() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
           to="/careers/web"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3f3dc9] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Web Development
        </Link>

        <Link
           to="/careers/app"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#493ee9] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          App Development
        </Link>

        <Link
          to="/careers/seo"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#424cda] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          SEO Optimization
        </Link>

        <Link
         to="/careers/digital"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#4049cc] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Digital Marketing
        </Link>

        <Link
        to="/careers/hr"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3d40ec] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Human Resources
        </Link>

        <Link
          to="/careers/business"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#3945f0] ease-in duration-200 hover:shadow-2xl text-white "
        >
          Business Development
        </Link>

        <Link
            to="/careers/more"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#3b4df0] ease-in duration-200 hover:shadow-2xl hover:text-white "
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
          <ul className="flex justify-between w-full flex-col text-center md:flex-row md:text-start ">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Job
              </p>
              <p className="text-[18px] text-black font-bold mt-3">
                BDO
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Skills</p>
              <p className="text-[18px] text-black font-bold mt-3">
                business Development
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Experience</p>
              <p className="text-[18px] text-black font-bold mt-3">
                2 years
              </p>
            </li>
            <li className="bg-[#f2f2f2] w-full flex justify-center items-center pb-4">
              <a
              
                href="https://www.linkedin.com/jobs/search/?currentJobId=3893611037&f_C=71255931&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3893600947%2C3893601636%2C3893602992%2C3893609194%2C3893607379%2C3893607108%2C3893607301%2C3893612000%2C3893611037" 
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#483de4] ease-in duration-200  " target="_blank"
              >
                Apply Now
              </a>
            </li>

          </ul>
          {/* row */}
        
        </div>
      </div>
    </>
  );
}

export default Bd;
