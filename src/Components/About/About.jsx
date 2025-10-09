import style from "./About.module.css";
import Hedding from "../CommonComponent/Hedding";
import EducationAndCertifications from "./EducationAndCertifications";

import profilePic from "../../assets/ayan-profile-pic.png";

import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="mt-4 pt-2 mt-sm-5 mt-lg-4 pt-lg-4">
      <div className="container-fluid">
        <div className="container">
          <Hedding hds={"About Me"} cursor={"_"} />
          <div>
            <div className="row mt-2 align-items-center justify-content-center">
              <div className="col-12 col-lg-5 my-5">
                <div className="d-flex justify-content-center my-3">
                  <div className={style.profilePicCont}>
                    <img src={profilePic} className={style.profilePic} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <header>
                  <h1>
                    👋 Hey there! I’m{" "}
                    <span style={{ color: "var(--accent-primary)" }}>
                      {" "}
                      <strong>Ayan</strong>{" "}
                    </span>
                  </h1>
                  <p className="subtitle">
                    A passionate <strong>Java Full Stack Web Developer</strong>{" "}
                    currently pursuing my{" "}
                    <strong>
                      Diploma in Computer Science Engineering (5th Semester)
                    </strong>
                    .
                  </p>
                </header>

                <article className="about-content space-y-4">
                  <p className="d-flex">
                    <span>
                      <FaLaptopCode
                        style={{
                          color: "var(--accent-primary)",
                          fontSize: "20px",
                        }}
                      />
                    </span>{" "}
                    <span className="ms-1 ps-1">
                      I specialize in crafting{" "}
                      <strong>
                        responsive, scalable, and performance-driven web
                        applications
                      </strong>
                      with clean UI and efficient backend logic. My development
                      stack bridges both worlds —
                    </span>
                  </p>

                  <ul className="list-unstyled d-flex justify-content-evenly">
                    <div>
                      <li>
                        <strong>Frontend</strong>
                      </li>
                      <li>
                        <strong>Backend</strong>
                      </li>
                    </div>
                    <li>
                      <strong>Tools:</strong> Git & GitHub for version control
                    </li>
                  </ul>

                  <p className="d-flex">
                    <span>
                      <FaLightbulb style={{ color: "yellow" }} />
                    </span>{" "}
                    <span className="ms-1 ps-1">
                      I’m driven by curiosity and creativity — turning complex
                      ideas into clean, functional, and visually appealing
                      solutions.
                    </span>
                  </p>
                  <p className="d-flex">
                    <span>
                      <FaCogs />
                    </span>
                    <span className="ms-1 ps-1">
                      With strong fundamentals in Java, OOP concepts, and modern
                      web architecture, I build robust, maintainable, and
                      user-focused applications.
                    </span>
                  </p>
                  <p className="d-flex">
                    <span>
                      <FaSeedling style={{ color: "#28A745" }} />
                    </span>{" "}
                    <span className="ms-1 ps-1">
                      I’m constantly learning and refining my skills — exploring
                      new tools, contributing to projects, and coding with
                      purpose.{" "}
                      <span
                        className={`${showMore && "d-none"} ${
                          style.extendContent
                        }`}
                        onClick={() => setShowMore(!showMore)}
                      >
                        {" "}
                        <br />
                        View More
                      </span>
                    </span>
                  </p>
                </article>
              </div>
              <p
                className={`px-lg-4 ${style.extraContent} ${
                  showMore ? style.show : style.hide
                }`}
              >
                I am passionate about what I do and driven by a constant desire
                to grow. I actively explore new frameworks, tools, and
                methodologies to sharpen my skills and deliver innovative,
                scalable solutions that stand the test of time.
                <br />
                <span className="d-block pt-2 mt-1">
                  My goal is to become a versatile developer who not only crafts
                  high-quality applications but also drives innovation by
                  creating digital products that solve real problems and enrich
                  user experiences.{" "}
                  <span
                    className={` ${style.extendContent}`}
                    onClick={() => setShowMore(!showMore)}
                  >
                    View Less
                  </span>
                </span>
              </p>
            </div>
          </div>
          <EducationAndCertifications />
        </div>
      </div>
    </section>
  );
};
export default About;
