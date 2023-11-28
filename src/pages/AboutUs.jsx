import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HoverCard from "@darenft/react-3d-hover-card";
import rocket from "../assets/ABOUTUS/rocket.png";
import bulb from "../assets/ABOUTUS/light-bulb.png";
import youth from "../assets/ABOUTUS/youth.png";
import teamwork from "../assets/ABOUTUS/teamwork.png";
import brainCircuit from "../assets/ABOUTUS/brain-circuit.png";
import cloud from "../assets/ABOUTUS/cloud.png";
import globe from "../assets/ABOUTUS/globe.png";
import laptop from "../assets/ABOUTUS/laptop.png";
import smartphone from "../assets/ABOUTUS/smartphone.png";
import wrench from "../assets/ABOUTUS/wrench.png";
import gcc from "../assets/ABOUTUS/gccp.jpg";
import projects from "../assets/ABOUTUS/projects.jpg";
import seminar from "../assets/ABOUTUS/seminar.jpg";
import workshops from "../assets/ABOUTUS/workshops.jpg";

import "@darenft/react-3d-hover-card/dist/style.css";

const AboutUs = () => {
  AOS.init();

  return (
    <>
      <section className="main1 flex justify-center items-center flex-col gap-[3rem] px-[1rem] py-[2rem] overflow-hidden">
        <div className="w-full relative text-center" data-aos="fade-up">
          <p
            className="text-[3rem] text-blue-950 relative inline-block"
            style={{ fontFamily: "Montserrat,sans-serif" }}
          >
            About Us
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-block w-full h-1 "
              style={{
                backgroundImage:
                  "linear-gradient(to right, red, red,red, yellow,yellow, yellow, green,green, green, blue,blue, blue)",
              }}
            ></span>
          </p>
        </div>

        <div className=" flex flex-col sm:flex-row justify-center items-center  gap-[2rem] ">
          <HoverCard scaleFactor={1.2}>
            <div
              className=" relative bg-white p-4 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <img
                className="absolute w-10 top-0 left-2"
                src={bulb}
                alt="bulb"
              />
              <h2
                className="text-3xl font-semibold mb-2 mt-10"
                style={{ fontFamily: "Google Sans,sans-serif" }}
              >
                Why GDSC?
              </h2>
              <p
                className="text-gray-700"
                style={{ fontFamily: "Google Sans,sans-serif" }}
              >
                GDSCs are university groups endorsed by Google, offering tech
                workshops and networking for students to learn about Google tech
                and collaborate on projects. Great for skill-building and
                industry connections.
              </p>
            </div>
          </HoverCard>
          <HoverCard scaleFactor={1.2}>
            <div
              className=" relative bg-white p-4 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <img
                className="absolute w-10 top-0 left-2"
                src={rocket}
                alt="bulb"
              />
              <h2
                className="text-3xl font-semibold mb-2 mt-10"
                style={{ fontFamily: "Google Sans,sans-serif" }}
              >
                Concept of GDSC
              </h2>
              <p
                className="text-gray-700"
                style={{ fontFamily: "Google Sans,sans-serif" }}
              >
                Google-backed university clubs fostering web and app
                development, DSA, etc, learning, collaboration, and networking
                among students interested in Google technologies.
              </p>
            </div>
          </HoverCard>
          <HoverCard scaleFactor={1.2}>
            <div
              className=" relative bg-white p-4 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <img
                className="absolute w-10 top-0 left-2"
                src={youth}
                alt="bulb"
              />
              <h2
                className="text-3xl font-semibold mb-2 mt-10"
                style={{ fontFamily: "Google Sans,sans-serif" }}
              >
                Target audience
              </h2>
              <p
                className="text-gray-700"
                style={{ fontFamily: "Google Sans,sans-serif" }}
              >
                University students interested in DSA, web and app development
                etc, seeking to enhance their skills, collaborate on projects,
                and connect with a community passionate about Google
                technologies.
              </p>
            </div>
          </HoverCard>
        </div>
      </section>
      <section className="main2 flex justify-center items-center flex-col  gap-[3rem] px-[3rem] py-[2rem]">
        <div className="w-full relative text-center" data-aos="fade-up">
          <p
            className="text-[3rem] text-blue-950 relative inline-block"
            style={{ fontFamily: "Montserrat,sans-serif" }}
          >
            What We Do
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-block w-full h-1 "
              style={{
                backgroundImage:
                  "linear-gradient(to right, red, red,red, yellow,yellow, yellow, green,green, green, blue,blue, blue)",
              }}
            ></span>
          </p>
          <p
            className=" text-base"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            data-aos="fade-up"
          >
            Welcome to GDSC-DJSCE , where one gets immense knowledge from the
            campaigns, workshops, and other events.{" "}
          </p>
          <p
            className=" text-base"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            data-aos="fade-up"
          >
            Shaping tomorrow's world, TODAY!{" "}
          </p>
        </div>
        <div className=" w-full flex flex-col lg:flex-row justify-center items-center px-[0rem] sm:px-[5rem]">
          <div>
            <p
              className=" text-3xl pb-8"
              style={{ fontFamily: "Montserrat,sans-serif" }}
              data-aos="fade-up"
            >
              We Work On:
            </p>
            <div className=" flex flex-wrap gap-x-10 gap-y-10 justify-center items-center">
              <div
                className="w-[16.5rem] flex  flex-row justify-center gap-8 px-4 py-2 border-2 border-gray-400 rounded-tr-lg rounded-bl-lg "
                data-aos="fade-up"
              >
                <img src={smartphone} alt="smartphone" />
                <p
                  className=" text-base"
                  style={{ fontFamily: "Google Sans,sans-serif" }}
                >
                  {" "}
                  App Development
                </p>
              </div>
              <div
                className="w-[16.5rem] flex flex-row justify-center gap-8 px-4 py-2 border-2 border-gray-400 rounded-tr-lg rounded-bl-lg "
                data-aos="fade-up"
              >
                <img src={globe} alt="web" />
                <p
                  className=" text-base"
                  style={{ fontFamily: "Google Sans,sans-serif" }}
                >
                  {" "}
                  Web Development
                </p>
              </div>
              <div
                className="w-[16.5rem] flex flex-row justify-center gap-6 px-4 py-2 border-2 border-gray-400 rounded-tr-lg rounded-bl-lg "
                data-aos="fade-up"
              >
                <img src={brainCircuit} alt="AIML" />
                <p
                  className=" text-base"
                  style={{ fontFamily: "Google Sans,sans-serif" }}
                >
                  {" "}
                  AI-ML Development
                </p>
              </div>
              <div
                className="w-[16.5rem] flex flex-row justify-center gap-12 px-4 py-2 border-2 border-gray-400 rounded-tr-lg rounded-bl-lg "
                data-aos="fade-up"
              >
                <img src={wrench} alt="logistics" />
                <p
                  className=" text-base"
                  style={{ fontFamily: "Google Sans,sans-serif" }}
                >
                  {" "}
                  Logistics
                </p>
              </div>
              <div
                className=" w-[16.5rem] flex flex-row justify-between gap-4 px-4 py-2 border-2 border-gray-400 rounded-tr-lg rounded-bl-lg "
                data-aos="fade-up"
              >
                <img src={laptop} alt="laptop" />
                <p
                  className=" text-base"
                  style={{ fontFamily: "Google Sans,sans-serif" }}
                >
                  {" "}
                  Competitive Programming
                </p>
              </div>
              <div
                className="w-[16.5rem] flex flex-row justify-center gap-4 px-4 py-2 border-2 border-gray-400 rounded-tr-lg rounded-bl-lg "
                data-aos="fade-up"
              >
                <img src={cloud} alt="cloud" />
                <p
                  className=" text-base"
                  style={{ fontFamily: "Google Sans,sans-serif" }}
                >
                  {" "}
                  Cloud Computing
                </p>
              </div>
            </div>
          </div>
          <div className=" pt-[3rem] lg:pt-0">
            <img
              className=" w-[100%] sm:w-[80rem]"
              src={teamwork}
              alt="teamwork"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>
      <section className="main3 flex justify-center items-center flex-col  gap-[3rem] px-[3rem] py-[2rem]">
        <div className="w-full relative text-center" data-aos="fade-up">
          <p
            className="text-[3rem] text-blue-950 relative inline-block"
            style={{ fontFamily: "Montserrat,sans-serif" }}
          >
            Vision
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-block w-full h-1 "
              style={{
                backgroundImage:
                  "linear-gradient(to right, red, red,red, yellow,yellow, yellow, green,green, green, blue,blue, blue)",
              }}
            ></span>
          </p>
          <p
            className=" text-base"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            data-aos="fade-up"
          >
            GDSC DJCSE is inspired by the Google Developer's Family.{" "}
          </p>
          <p
            className=" text-base"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            data-aos="fade-up"
          >
            Our goal is to learn, explore, innovate and create.{" "}
          </p>
          <p
            className=" text-base"
            style={{ fontFamily: "Montserrat,sans-serif" }}
            data-aos="fade-up"
          >
            And UPGRADING OURSELVES!{" "}
          </p>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-xl shadow-black/30"data-aos="fade-up">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={gcc}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class=" text-3xl font-bold text-white pb-4" style={{ fontFamily: "Montserrat,sans-serif" }}>
                Google Cloud Campaign
              </h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ fontFamily: "Google Sans,sans-serif" }}>
              Learn Google Cloud for Free from resources provided by google and with the guidence of our Core Team
              </p>
            </div>
          </div>
          
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-xl shadow-black/30"data-aos="fade-up">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={projects}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class=" text-3xl font-bold text-white pb-4" style={{ fontFamily: "Montserrat,sans-serif" }}>
                Projects
              </h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ fontFamily: "Google Sans,sans-serif" }}>
              Learn Google Cloud for Free from resources provided by google and with the guidence of our Core Team
              </p>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-xl shadow-black/30"data-aos="fade-up">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={seminar}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class=" text-3xl font-bold text-white pb-4" style={{ fontFamily: "Montserrat,sans-serif" }}>
                Seminar
              </h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ fontFamily: "Google Sans,sans-serif" }}>
              Learn Google Cloud for Free from resources provided by google and with the guidence of our Core Team
              </p>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-xl shadow-black/30"data-aos="fade-up">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={workshops}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class=" text-3xl font-bold text-white pb-4" style={{ fontFamily: "Montserrat,sans-serif" }}>
                Workshops
              </h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ fontFamily: "Google Sans,sans-serif" }}>
              Learn Google Cloud for Free from resources provided by google and with the guidence of our Core Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
