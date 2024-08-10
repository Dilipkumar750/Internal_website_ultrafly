import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Carrers() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Careers | Ultrafly Solutions</title>
          <meta
            name="description"
            content="Join the Ultrafly Solutions team and build a rewarding career in the tech industry. Explore our current job openings and apply today."
          />
          <meta
            name="keywords"
            content="careers, job openings, tech jobs, Ultrafly Solutions careers"
          />
        </Helmet>
      </HelmetProvider>
      <section className="">
        <h1 className=" text-blue-500 text-center text-3xl md:text-4xl font-bold pt-24">
          JOIN OUR TEAM
        </h1>
        {/* schedule */}
        <div className="container page-padding py-[3rem] md:py-[7rem]">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Carrers;
