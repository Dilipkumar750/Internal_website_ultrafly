import MainButton from "../MainButton";
import TitleRed from "../../images/features/title-bg.svg";
import "./featured.css";
import img1 from "../../images/features/bg1.jpg";
import img2 from "../../images/features/bg2.jpg";
import img3 from "../../images/features/bg5.jpg";
import img4 from "../../images/features/bg3.jpg";
import img5 from "../../images/features/bg4.jpg";
import img6 from "../../images/features/bg6.jpg";

function Featured() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <section id="featured" className="page-padding bg-white pt-5">
        <div className="container">
          {/* title */}
          <div
            data-aos="zoom-in"
            className="flex w-40 flex-col text-center items-center relative mx-auto"
          >
            <p className="font-semibold text-white text-[12px] relative uppercase z-10 ">
              OUR FEATURED Services
            </p>
            <img
              src={TitleRed}
              data-aos="fade-left"
              alt="Ultrafly Solutions"
              className="w-full absolute -top-[6px] md1000:w-[22rem] "
            />
          </div>
          <h2 className=" text-xl md:text-3xl text-center text-[#03a4ed] font-bold my-10">
            Explore Our Services, Why Choose Us, Success Stories
          </h2>
          {/* grid */}
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-7  mt-7">
            <div className="item-0-div relative h-96 overflow-hidden md:col-span-2 card">
              <img src={img1} alt="" />
              <h1 className="head sd_title">SOFTWARE DEVELOPER</h1>
              <div className="card__content card1_content">
                <p className="card__title " style={{ color: "darkblue" }}>
                  Custom Software Development Solutions
                </p>
                <p
                  className="card__description  text-justify"
                  style={{ color: "darkblue" }}
                >
                  We are experts in developing end to end applications based on
                  web technologies. 
                  <span
                    className="card__description para_hide_M text-justify"
                    style={{ color: "darkblue" }}
                  >
                     We combine strong technological insight together with
                    business visions to deliver you the accurate inputs across
                    the product life cycle.
                  </span>{" "}
                  <span
                    className="card__description para_hide text-justify"
                    style={{ color: "darkblue" }}
                  >
                    {" "}
                    We use web technologies like PHP, HTML, CSS, JavaScript,
                    .Net and Drupal to deliver on-the-go access via a wide range
                    of devices. Our web applications/sites on the web help them
                    to be highly flexible while reducing the maintenance costs.
                  </span>
                </p>
              </div>
            </div>

            <div className=" item-1-div relative h-96 overflow-hidden  card">
              <img src={img2} alt="" />
              <h1 className="head2 sd_title"> MOBILE APP DEVELOPMENT</h1>
              <div className="card__content">
                <p className="card__title" style={{ color: "darkblue" }}>
                  Custom Mobile App Development Services
                </p>
                <p
                  className="card__description  text-justify"
                  style={{ color: "darkblue" }}
                >
                  We excel in developing high-quality mobile apps.
                  <span
                    className="card__description para_hide_M text-justify"
                    style={{ color: "darkblue" }}
                  >
                     Whether you're a startup, a small business, or a large
                    enterprise, having a mobile app can help you reach a wider
                    audience and customer engagement.{" "}
                  </span>
                </p>
              </div>
            </div>

            {/* <div className=" item-1-div relative h-96 overflow-hidden ">
              <div className="item-1 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-8 left-10">
                <h3 className="text-white text-3xl font-bold ">
                  Mobile App Development
                </h3>
                <p className="text-white backdrop-blur-sm bg-white/30 text-[16px] mt-3 py-1 px-5">
                  Friday: 10:00am-11:00am
                </p>
              </div>
            </div> */}

            <div className="card">
              <img src={img4} alt="" />
              <h1 className="head">WEBSITE DEVELOPER</h1>
              <div className="card__content">
                <p className="card__title" style={{ color: "darkblue" }}>
                  Professional Website Development Services
                </p>
                <p
                  className="card__description  text-justify"
                  style={{ color: "darkblue" }}
                >
                  As technology continues to evolve at an unprecedented pace,
                  the role of Website development will only grow in
                  significance. It is a field that demands intellectual
                  curiosity, problem-solving abilities, and a passion for
                  creating something new.
                </p>
              </div>
            </div>

            {/* <div className="item-2-div relative h-96 overflow-hidden ">
              <div className="item-2 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <h3 className="text-white text-3xl font-bold">
                  Website Development{" "}
                </h3>
                <p className="text-white backdrop-blur-sm bg-white/30 text-[16px] mt-3 py-1 px-5">
                  Saturday: 9:00am-10:00am
                </p>
              </div>
            </div> */}

            <div className="card">
              <img src={img3} alt="" />
              <h1 className="head">SEO OPTIMIZATION</h1>
              <div className="card__content">
                <p className="card__title" style={{ color: "darkblue" }}>
                  Result-Driven SEO
                </p>
                <p
                  className="card__description  text-justify"
                  style={{ color: "darkblue" }}
                >
                  In Ultrafly Solutions social media marketing, you use popular
                  social media networks to achieve your marketing and branding
                  goals. Social media marketing isn't just about creating a
                  business account and posting whenever you want. You need to
                  develop a strategy with measurable goals that includes.
                </p>
              </div>
            </div>

            {/* <div className="item-3-div relative h-96 overflow-hidden ">
              <div className="item-3 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <h3 className="text-white text-3xl font-bold">
                  SEO Optimizations
                </h3>
                <p className="text-white backdrop-blur-sm bg-white/30 text-[16px] mt-3 py-1 px-5">
                  Friday: 1:00pm-2:00pm
                </p>
              </div>
            </div> */}

            <div className="card">
              <img src={img4} alt="" />
              <h1 className="head">DIGITAL MARKETING</h1>
              <div className="card__content">
                <p className="card__title" style={{ color: "darkblue" }}>
                  Social Media Marketing
                </p>
                <p
                  className="card__description  text-justify"
                  style={{ color: "darkblue" }}
                >
                  Digital marketing content is a pivotal tool for online
                  success. It encompasses various forms, from blog posts and
                  videos to social media updates and email campaigns. Effective
                  content resonates with your audience, delivers value, and
                  aligns with your brand's message. It leverages SEO strategies
                  for visibility and engages users on social platforms.
                </p>
              </div>
            </div>

            {/* <div className="item-4-div relative h-96 overflow-hidden ">
              <div className="item-4 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <h3 className="text-white text-3xl font-bold">
                  Digital Marketing
                </h3>
                <p className="text-white backdrop-blur-sm bg-white/30 text-[16px] mt-3 py-1 px-5">
                  Sunday: 6:00pm-7:00pm
                </p>
              </div>
            </div> */}
            <div className="item-5-div relative h-96 overflow-hidden md:col-span-2  card">
              <img src={img6} alt="" />
              <h1 className="head2 sd_title"> IT STAFFING</h1>
              <div className="card__content card1_content">
                <p className="card__title" style={{ color: "darkblue" }}>
                  Expert IT Staffing Solutions
                </p>
                <p
                  className="card__description  text-justify"
                  style={{ color: "darkblue" }}
                >
                  Staffing: key to success, blending recruiting, training,
                  intuition, and data. <br />
                  <span
                    className="card__description para_hide_M text-justify"
                    style={{ color: "darkblue" }}
                  >
                    Staffing, the cornerstone of organizational success, is a
                    strategic function that involves recruiting, selecting,
                    training, and developing employees to meet an organization's
                    goals. It is a delicate balance of art and science,
                    requiring both intuition and data-driven decision-making. 
                  </span>
                  <p
                    className="card__description para_hide text-justify"
                    style={{ color: "darkblue" }}
                  >
                     Effective staffing begins with a thorough understanding of
                    an organization's needs. Identifying the specific skills,
                    knowledge, and competencies required for different roles is
                    crucial. Once these requirements are defined, the process of
                    talent acquisition commences. This involves crafting
                    compelling job descriptions, utilizing various recruitment
                    channels, and employing innovative sourcing strategies to
                    attract qualified candidates.
                  </p>
                </p>
              </div>
            </div>

            {/*   <div className="item-5-div relative h-96 overflow-hidden md:col-span-2 ">
              <div className="item-5 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <h3 className="text-white text-3xl font-bold">IT Staffing</h3>
                <p className="text-white backdrop-blur-sm bg-white/30 text-[16px] mt-3 py-1 px-5">
                  Monday: 4:00pm-5:00pm
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* featured cta */}
      <div
        id="g_text"
        className="featured-cta my-10 flex justify-center text-left items-center "
      >
        <div className="container page-padding ">
          <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center text-center gap-10">
            <h2
              className="text-white text-xl md:text-3xl font-bold leading-[1.2] md:col-span-4 "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              We Are Always Providing Best Software Service For You
            </h2>

            <div className=" flex justify-center " data-aos="zoom-in-up">
              <MainButton
                color={`text-black`}
                bg={`bg-white`}
                text="Join With Us"
                arrowColor={`text-black`}
                goTo="/contact-us"
                width={`w-40 md:w-40`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
