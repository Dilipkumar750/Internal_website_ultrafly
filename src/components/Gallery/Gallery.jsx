
import BgIcon from "../../images/gallery/bg-icon.png";

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative">
        <img
          src={BgIcon}
          alt="bg_img"
          className="absolute top-[30px] right-0"
        />

        <div className="container page-padding pt-[4rem]">
          {/* title div -- */}
          <div className="items-center ">
            <p className="uppercase font-bold mb-10">
             GALLERY
            </p>
            

            <h2 className="text-[3.4rem] font-bold mb-4">
              Our Workplace Gallery
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company's work atmosphere.
            </p>
          </div>

          {/* gallery */}
          <div className="gallery-grid py-24 w-full h-auto relative ">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
