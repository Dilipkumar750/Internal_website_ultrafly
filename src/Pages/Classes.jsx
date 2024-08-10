import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import bg1 from '../images/classes/cycling.jpg';
import bg2 from '../images/classes/meditation.jpg';
import bg3 from '../images/classes/A.png';
import bg4 from '../images/classes/app1.png';
import bg5 from '../images/classes/app2.png';
import bg6 from '../images/classes/mobileapps.png';

function Classes() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const projects = [
    { bgImg: bg1, title: "Den Mark", trainer: "", date: "", text: "If you think math is hard, try web design." },
    { bgImg: bg2, title: "Sales Life Site - Website", trainer: "", date: "", text: "A website without SEO is like a car with no gas.” Paul Cookson" },
    { bgImg: bg3, title: "Adappt - Website", trainer: "John Flex", date: "Tue: 4:00 pm", text: "Websites promote you 24/7: No employee will do that" },
    { bgImg: bg4, title: "Time Sheet - Website", trainer: "David Rich", date: "Sat: 9:00 am", text: "Digital design is like painting, except the paint never dries." },
    { bgImg: bg5, title: "Mobile App", trainer: "Larry Wheels", date: "Mon: 8:00 pm", text: "A bad website is like a grumpy salesperson." },
    { bgImg: bg6, title: "Mobile App", trainer: "Shawn Ray", date: "Sun: 10:00 am", text: "Website without visitors is like a ship lost in the horizon." },
  ];

  const getCardClass = (index) => {
    switch (index) {
      case 0:
        return 'card1';
      case 1:
        return 'card2';
      case 2:
        return 'card3';
      case 3:
        return 'card4';
      case 4:
        return 'card5';
      case 5:
        return 'card6';
      default:
        return '';
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Our Portfolio | Ultrafly Solutions</title>
          <meta
            name="description"
            content="Explore our portfolio showcasing successful projects in mobile app development, website development, and digital marketing by Ultrafly Solutions."
          />
          <meta name="keywords" content="portfolio, project showcase, case studies, Ultrafly Solutions" />
        </Helmet>
      </HelmetProvider>
      <section className="portfolio max-sm:mt-8">
        <h1 className="title">Our Portfolio</h1>
        <h1 className="text-2xl font-bold">Our Recent Projects</h1>
        <p className="text-base md:text-xl py-4">At UltraFly Solutions, we take pride in delivering top-notch digital solutions tailored to meet our clients' unique needs. Our portfolio showcases a diverse range of projects that demonstrate our expertise, creativity, and commitment to excellence. Explore our success stories and see how we've helped businesses across various industries achieve their goals.</p>
        <div className="card-grid1">
          {projects.map((project, index) => (
            <div
              className={`cardclass ${getCardClass(index)}`}
              key={index}
            >
              <h1 className="project-title">{project.title}</h1>
              <div className="inner-box">
                <div className="front" style={{ backgroundImage: `url(${project.bgImg})` }}>
                </div>
                <div className="back font-bold text-lg text-gray-700 mb-4" style={{ fontFamily: 'monospace' }}> 
               <h1 className="text-center text-2xl font-semibold">{project.title}</h1>
                <div className="project-info font-medium text-lg text-gray-700 mb-4">
                  <p className="project-text font-medium text-lg text-gray-700 mb-4">Text: {project.text}</p>
                  <p className="project-trainer font-medium text-lg text-gray-700 mb-4">Trainer: {project.trainer}</p>
                    <p className="project-date font-medium text-lg text-gray-700 mb-4">Date: {project.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: white;
          margin: 0;
          padding: 0;
        }

        .portfolio {
          padding: 8rem;
          text-align: center;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: Verdana, Arial, Helvetica, sans-serif;
          font-weight: bold;
          color: #333;
        }

        .card-grid1 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4.5rem;
        }

        .card1, .card4, .card5 {
          grid-column: span 1;
        }

        .card2, .card3, .card6 {
          grid-column: span 2;
        }

        .cardclass {
          height: 300px;
          perspective: 900px;
          border-radius: 40px;
        }

        .inner-box {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          position: relative;
          
        }

        .cardclass:hover .inner-box {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-shadow: 0 8px 10px rgba(0, 0, 3, 0.5);
          border-radius: 20px;
          transition: color 0.4s, background-color 0.4s;
        }

        .front {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          color: white;
        }

        .back {
          background-size: cover;
          background-position: center;
          color: black;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: flex-start; 
          justify-content: center;
          background-color: white;
          text-align: left; 
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .cardclass:hover .front {
          color: white;
        }

        .cardclass:hover .back {
          color: black;
        }

        .project-title {
          margin: 0;
          transition: color 0.4s;
          // font-family: Papyrus;
          padding:10px;
          font-weight: bold;
          font-size:24px;
          
        }

        .cardcard:hover .project-title {
          visibility: hidden;
        }

        .project-info {
          display: inline-block; /* Align text as inline-block */
          gap: 0.5rem; /* Add space between elements */
        }

        .project-text,
        .project-trainer,
        .project-date {
          margin: 0.5rem 0;
          transition: color 0.4s;
        }

        .cardclass:hover .project-text,
        .cardclass:hover .project-trainer,
        .cardclass:hover .project-date {
          color: black;
        }

        @media (max-width: 1024px) {
          .card-grid1 {
            grid-template-columns: repeat(2, 1fr);
            gap:6rem;

          }

          .cardclass {
            height: 300px;
          }

          .inner-box {
            width: 100%;
            height: 100%;
          }

          .card2, .card3, .card6 {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
         
          .card-grid1 {
            grid-template-columns: 1fr;
            gap:6rem;
          }

          .cardclass {
            height: 200px;
          }

          .inner-box {
            width: 100%;
            height: 100%;
            background-color: white;
          }

          .card1, .card2, .card3, .card4, .card5, .card6 {
            grid-column: span 1;
          }

          .portfolio {
            padding: 3rem;
          }
        }
      `}</style>
    </>
  );
}

export default Classes;
