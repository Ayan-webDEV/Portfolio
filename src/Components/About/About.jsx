import style from "./About.module.css";
import Hedding from "../CommonComponent/Hedding";
import EducationAndCertifications from "./EducationAndCertifications";
import Divider from "../CommonComponent/Divider";

// import profilePic from "../../assets/ayan-profile-pic.png";
import profilePic2 from "../../assets/ayan-profile-pic-2.png";
import { useTheme } from "../../ContextStore/ContextStore";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";

const About = () => {
  const { darkMode } = useTheme();

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section
        id="about"
        className="my-4  pt-2 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container-fluid">
          <div className="container">
            <Hedding hds={"About Me"} cursor={"_"} />
            <div>
              <div className="row mt-4 pt-2 align-items-center justify-content-center ">
                <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
                  {/* <div className="d-flex my-3 justify-content-center justify-content-lg-start">
                  <div className={style.profilePicCont}>
                    <img
                      src={profilePic}
                      className={`${style.profilePic} ${
                        !darkMode && style.profileLight
                      }`}
                      alt=""
                    />
                  </div>
                </div> */}
                  <div
                    className={`${style.circle} ${
                      !darkMode && style.circleLgt
                    }`}
                  >
                    <img
                      src={profilePic2}
                      className={style.picProfile}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <header>
                    <h1 className={style.AboutHds}>
                      👋 Hey there! I’m{" "}
                      <span>
                        {" "}
                        <strong style={{ color: "var(--accent-primary)" }}>
                          Ayan
                        </strong>{" "}
                      </span>
                    </h1>
                    <p className="subtitle">
                      A passionate{" "}
                      <strong>Java Full Stack Web Developer</strong> currently
                      pursuing my{" "}
                      <strong>Diploma in Computer Science Engineering</strong>{" "}
                      (5th Semester) .
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
                        </strong>{" "}
                        with clean UI and efficient backend logic. My
                        development stack bridges both worlds —
                      </span>
                    </p>

                    <ul className={style.stackList}>
                      <div className={style.stackListCont}>
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
                        With strong fundamentals in Java,{" "}
                        <strong>OOP concepts</strong>, and modern web
                        architecture, I build{" "}
                        <strong>robust, maintainable</strong>, and{" "}
                        <strong> user-focused applications</strong>.
                      </span>
                    </p>
                    <p className="d-flex">
                      <span>
                        <FaSeedling style={{ color: "#28A745" }} />
                      </span>{" "}
                      <span className="ms-1 ps-1">
                        I’m constantly learning and refining my skills —
                        exploring new tools, contributing to{" "}
                        <strong>projects,</strong> and
                        <strong> coding</strong> with <strong>purpose</strong>.{" "}
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
                  I am passionate about what I do and driven by a constant
                  desire to <strong>grow</strong>. I actively explore{" "}
                  <strong>new frameworks, tools, and methodologies</strong> to
                  sharpen my skills and deliver{" "}
                  <strong>innovative, scalable solutions </strong>
                  that stand the test of time.
                  <br />
                  <span className="d-block pt-2 mt-1">
                    My goal is to become a <strong>versatile developer</strong>{" "}
                    who not only crafts{" "}
                    <strong>high-quality applications</strong> but also{" "}
                    <strong>drives innovation</strong> by creating
                    <strong> digital products</strong> that solve real problems
                    and <strong>enrich user experiences</strong>.{" "}
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
      <Divider />
    </>
  );
};
export default About;
