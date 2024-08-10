import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="mt-16">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-[3rem] font-bold">
            Gallery
          </h1>
        </div>
        <div className="container page-padding py-8">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Gallery;
