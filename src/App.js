import React, { Suspense, lazy, useEffect } from "react";
import Contact from "./Pages/Contact";
import Navbar from "./components/Nav/Navbar";
import { NotificationContainer } from "react-notifications";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Pages/Loder";
import ScrollToTop from "./components/ScrollToTop";
import SocialMedias from "./Pages/our_services_pages/SocialMedias";
import Loder from "./Pages/Loder";
import Error from "./Pages/Error";

const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Home = lazy(() => import("./Pages/Home"));
const Classes = lazy(() => import("./Pages/Classes"));
const Blog = lazy(() => import("./Pages/Blog"));
const Schedule = lazy(() => import("./Pages/Schedule/Carrers"));
const Monday = lazy(() => import("./Pages/Schedule/Web"));
const Tuesday = lazy(() => import("./Pages/Schedule/App"));
const Wednesday = lazy(() => import("./Pages/Schedule/Seo"));
const Thursday = lazy(() => import("./Pages/Schedule/Digital"));
const Friday = lazy(() => import("./Pages/Schedule/Hr"));
const Saturday = lazy(() => import("./Pages/Schedule/Bd"));
const Sunday = lazy(() => import("./Pages/Schedule/More"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const GalleryPage1 = lazy(() => import("./Pages/Gallery/GalleryPage1"));
const GalleryPage2 = lazy(() => import("./Pages/Gallery/GalleryPage2"));
const About = lazy(() => import("./Pages/About"));
const Ourservices = lazy(() => import("./Pages/OurServices"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ITStaffing = lazy(() => import("./Pages/our_services_pages/ITStaffing"));
const Mobile = lazy(() => import("./Pages/our_services_pages/Mobile"));
const Seo = lazy(() => import("./Pages/our_services_pages/Seo"));
const Software = lazy(() => import("./Pages/our_services_pages/Software"));
const Website = lazy(() => import("./Pages/our_services_pages/Website"));
const FirstBlog = lazy(() => import("./Pages/blog_pages/FirstBlog"));


function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NotificationContainer />
      <AuthContextProvider>
        <Navbar />
        <Suspense fallback={<Loder />}>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/portfolio" element={<Classes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/FirstBlog" element={<FirstBlog />} />
            <Route path="/services" element={<Ourservices />} />
            <Route path="/it-staffing" element={<ITStaffing />} />
            <Route path="/mobile-app-development" element={<Mobile />} />
            <Route path="/digital-marketing-company" element={<Seo />} />
            <Route path="/software-development" element={<Software />} />
            <Route path="/website-development-company" element={<Website />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/careers" element={<Schedule />}>
              <Route path="web" element={<Monday />} />
              <Route path="app" element={<Tuesday />} />
              <Route path="seo" element={<Wednesday />} />
              <Route path="digital" element={<Thursday />} />
              <Route path="hr" element={<Friday />} />
              <Route path="business" element={<Saturday />} />
              <Route path="more" element={<Sunday />} />
            </Route>
            <Route path="gallery" element={<Gallery />}>
              <Route path="page-1" element={<GalleryPage1 />} />
              <Route path="page-2" element={<GalleryPage2 />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </AuthContextProvider>
      <div className=" fixed right-6 top-28 z-40 ">
        <SocialMedias />
      </div>
      <div className="fixed right-6 bottom-32 z-40 ">
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
