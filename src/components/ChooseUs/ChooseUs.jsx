import VideoImg from "../../images/choose-us/online grow.png";

import PlayImg from "../../images/choose-us/play.png";

function ChooseUs() {
  return (
    <> 
      <section className="choose-section">
        <div className="container page-padding grid md:grid-cols-2 gap-5">
          <div className="video-div relative">
            <img
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
            <span className="bg-white cursor-pointer p-8 md:p-10 lg:p-12 absolute rounded-full top-[38.7%] left-[39.9%] flex justify-center items-center">
            <img
              src={PlayImg}
              alt="play_img"
              className=" w-8 lg:w-[2.4rem] cursor-pointer "
            />
            </span>
          </div>

          <div className="relative">
            <h3 className="text-[#03a4ed] relative z-10 text-[30px]  font-bold">
            Transforming Ideas into Cutting-Edge Software
            </h3>

            <p className="text-base md:text-xl text-[#646464] mt-2 md:mt-7 max-w-3xl">
            We specialize in elevating your brand's voice. Through ROI-focused strategies, we craft compelling narratives, ensuring distinctiveness and resonance in the market.
            </p>

            <div className="grid grid-cols-1 grid-rows-2 gap-14  mt-14 min450:flex min450:flex-col">
              <div className="flex items-center gap-6">

                <i className="fa-solid text-center fa-arrow-right text-[25px] md:text-[30px] bg-[#03a4ed] text-white hover:bg-[#ff695f] ease-in duration-200 w-[5.5rem] md:w-[6.5rem]  p-2 md:p-3" data-aos="fade-right" data-aos-duration="250"></i>
                <p className="text-gray-900 font-bold text-[14px] md:text-[18px] ">

                  1. Digital marketing
                </p>
              </div>

              <div className="flex items-center gap-6">
                <i className="fa-solid fa-arrow-right text-[25px] md:text-[30px] bg-[#03a4ed] text-white hover:bg-[#ff695f] ease-in duration-200 w-[5.5rem] md:w-[6.5rem] p-2 md:p-3 text-center" data-aos="fade-right" data-aos-duration="250"></i>

                <p className="text-gray-900 font-bold text-base md:text-xl ">
                  2. Brand strategy
                </p>
              </div>

              <div className="flex items-center gap-6">
                <i className="fa-solid fa-arrow-right text-[25px] md:text-[30px] bg-[#03a4ed] text-white hover:bg-[#ff695f] ease-in duration-200 w-[5.5rem] md:w-[6.5rem]  p-2 md:p-3 text-center" data-aos="fade-right"  data-aos-duration="250"></i>

                <p className="text-gray-800  font-bold text-base md:text-xl ">
                  3. Web design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
