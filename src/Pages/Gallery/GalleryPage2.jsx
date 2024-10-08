import React,{useEffect} from "react";
import { galleryImg } from "./GalleryFiles";
import { Link } from "react-router-dom";

function GalleryPage2() {
  useEffect(()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
      },[])
  const secondPageImgs = galleryImg.filter((item) => item.id >= 9);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {secondPageImgs.map((image) => (
          <div key={image.id}>
            <img alt="gallery_img" className="w-full h-auto" src={image.img} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-32">
        <Link
         
          to="/gallery/page-1"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
        >
          <i className="fa-solid fa-angles-left"></i>
        </Link>
        <Link
         
          to="/gallery/page-1"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md  bg-white"
        >
          1
        </Link>
        <Link
         
          to="/gallery/page-2"
          className="text-white inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-[#ff0336] "
        >
          2
        </Link>
      </div>
    </>
  );
}

export default GalleryPage2;
