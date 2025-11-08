import style from "./Skill.module.css";
import Hedding from "../CommonComponent/Hedding";
import Divider from "../CommonComponent/Divider";
// import { useState } from "react";
import { useTheme } from "../../ContextStore/ContextStore";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
  FaComments,
  FaLightbulb,
  FaRegClock,
  FaLaptopCode,
  FaServer,
  FaCode,
  FaUserFriends,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiSpringboot } from "react-icons/si";
import { MdDevices, MdApi, MdPsychology } from "react-icons/md";
import { FaVial } from "react-icons/fa6"; // from Font Awesome 6
import { useState } from "react";

const Skills = () => {
  const { darkMode } = useTheme();

  const [hoveredItem, setHoveredItem] = useState({
    skillId: null,
    index: null,
  });

  const skills = [
    {
      id: 1,
      hedding: "Frontend Stack",
      hdsIcon: <FaLaptopCode />,
      stackList: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Bootstrap",
        "Tailwind",
        "UI/UX Design",
        "Responsive Design",
      ],
      icons: [
        <FaHtml5 style={{ color: "#E44D26", fontSize: "20px" }} />,
        <FaCss3Alt style={{ color: "#1572B6", fontSize: "20px" }} />,
        <FaJsSquare style={{ color: "#F7DF1E", fontSize: "20px" }} />,
        <FaReact style={{ color: "#61DAFB", fontSize: "20px" }} />,
        <SiRedux style={{ color: "#764ABC", fontSize: "20px" }} />,
        <FaBootstrap style={{ color: "#7952B3", fontSize: "20px" }} />,
        <SiTailwindcss style={{ color: "#38BDF8", fontSize: "20px" }} />,
        <FaFigma style={{ color: "#F24E1E", fontSize: "20px" }} />,
        <MdDevices style={{ color: "#00C4CC", fontSize: "20px" }} />,
      ],
      description: [
        "Defines web structure using semantic tags, media support, and accessibility features, forming the backbone of responsive and modern website development.",
        "Styles web pages with colors, layouts, transitions, and animations, ensuring responsive, visually appealing, and consistent designs across all devices.",
        "",
        "JavaScript library for building fast, component-based UIs with virtual DOM for efficient updates and reusable interface elements.",
        "Simplifies React state management with minimal boilerplate, predictable data flow, and enhanced debugging for large-scale web applications.",
        "Front-end framework offering responsive grids, pre-built components, and utilities to quickly design clean, consistent, and mobile-friendly websites.",
        "Utility-first CSS framework enabling rapid UI development, easy customization, and responsive layouts with minimal custom styling effort.",
        "Focuses on usability, accessibility, and aesthetics to create engaging, intuitive, and visually balanced user experiences across interfaces.",
        "Ensures websites adapt fluidly to all screen sizes using flexible grids, media queries, and mobile-first design principles.",
      ],
      status: [true, true, false, true, true, true, true, true, true],
    },
    {
      id: 2,
      hedding: "Backend Stack",
      hdsIcon: <FaServer />,
      stackList: [
        "Java",
        "Spring Boot",
        "MySQL",
        "API Integration",
        "Git & GitHub",
        "JUnit",
      ],
      icons: [
        <FaJava style={{ color: "#f89820", fontSize: "20px" }} />,
        <SiSpringboot style={{ color: "#6DB33F", fontSize: "20px" }} />,
        <FaDatabase style={{ color: "#4479A1", fontSize: "20px" }} />,
        <MdApi style={{ color: "#FF6F00", fontSize: "20px" }} />,
        <FaGithub
          style={{ color: darkMode ? "#fefefe" : "#181717", fontSize: "20px" }}
        />,
        <FaVial style={{ color: "#25A162", fontSize: "20px" }} />,
      ],
      description: [
        "",
        "Simplifies Java backend creation with auto-configuration, REST APIs, and production-ready tools for efficient, scalable applications.",
        "",
        "Connects software systems for seamless data exchange, automation, and enhanced functionality across multiple applications.",
        "Version control tools enabling collaboration, change tracking, branching, and efficient code management in team environments.",
        "Java testing framework ensuring code reliability by automating unit tests and detecting bugs early in development.",
      ],
      status: [false, true, false, true, true, true],
    },
    {
      id: 3,
      hedding: "Programming",
      hdsIcon: <FaCode />,
      stackList: ["JavaScript", "Java", "Python", "SQL"],
      icons: [
        <FaJsSquare style={{ color: "#F7DF1E", fontSize: "20px" }} />,
        <FaJava style={{ color: "#f89820", fontSize: "20px" }} />,
        <FaPython style={{ color: "#3776AB", fontSize: "20px" }} />,
        <FaDatabase style={{ color: "#4479A1", fontSize: "20px" }} />,
      ],
      description: [
        "Adds interactivity and logic to websites, enabling dynamic content, event handling, and smooth user experiences through modern web frameworks.",
        "Object-oriented language used for secure, scalable, and platform-independent backend and enterprise application development.",
        "Simple, versatile language learned for logic building, OOP, and modules to enhance programming adaptability and versatility.",
        "Relational database system managing structured data efficiently with secure storage, retrieval, and reliable query performance.",
      ],
      status: [true, true, true, true],
    },
    {
      id: 4,
      hedding: "Soft Skills",
      hdsIcon: <FaUserFriends />,
      stackList: [
        "Communication",
        "Adaptability",
        "Time Management",
        "Creativity",
      ],
      icons: [
        <FaComments style={{ color: "#0A84FF", fontSize: "20px" }} />,
        <MdPsychology style={{ color: "#FFB100", fontSize: "20px" }} />,
        <FaRegClock style={{ color: "#34C759", fontSize: "20px" }} />,
        <FaLightbulb style={{ color: "#FFD60A", fontSize: "20px" }} />,
      ],
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="container-fluid my-4  pt-2 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container">
          <Hedding hds={"Skills"} cursor={"»"} />
          <div className="my-3 pt-3">
            <h4 className={style.slog}>
              Turning ideas into{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                interactive
              </span>
              ,{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                efficient
              </span>
              , and{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                scalable
              </span>{" "}
              digital experiences.
            </h4>
            <article className={style.skillAboutMob}>
              I build complete web solutions with clean design, performance, and
              maintainable code. I craft responsive UIs and scalable, secure
              backends, combining precision, learning, and problem-solving.
              Every project reflects my passion for quality and continuous
              improvement.
            </article>
            <article className={style.skillAboutNoneMob}>
              I specialize in building complete, end-to-end web solutions with a
              focus on clean design, performance, and maintainable code. On the
              frontend, I craft responsive, user-friendly interfaces for
              seamless experiences across devices. On the backend, I ensure
              scalability, security, and efficient data handling for reliable
              performance. Every technology I use reflects my dedication to
              learning, precision, and problem-solving — from modular Java logic
              to dynamic, interactive web interfaces.
            </article>
            <h4 className={style.slog}>
              I don’t just code{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                features
              </span>{" "}
              — I build solutions that work{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                beautifully
              </span>{" "}
              and perform{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                effortlessly
              </span>
              .
            </h4>
          </div>
          <h1
            className="pt-4 my-5 pb-lg-1"
            style={{
              textAlign: "center",
              fontFamily: "poppins, Roboto, sans-serif ",
            }}
          >
            Technical{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: "900" }}>
              Skills
            </span>
          </h1>
          <div className="row justify-content-sm-evenly">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="mt-1 mb-4 mt-sm-0 my-lg-0 col-12 col-md-5 col-lg-3"
              >
                <h3
                  className={`d-flex align-items-center ${style.techSkillsHds}`}
                >
                  <span
                    style={{
                      color: "var(--accent-primary)",
                      margin: "0 10px 0 0",
                      fontSize: "24px",
                    }}
                  >
                    {skill.hdsIcon}
                  </span>
                  {skill.hedding}
                </h3>
                <ul className="mt-3 pt-1 list-unstyled">
                  {skill.stackList.map((list, idx) => (
                    <div key={idx} style={{ position: "relative" }}>
                      <div className={style.skillNameCont}>
                        <li
                          className={`${style.stackSkills} ${
                            skill.status?.[idx] !== true &&
                            style.stackSkillNoDetailsCursor
                          }`}
                          style={{ color: darkMode ? "#f5f5f5" : "#141414" }}
                          onMouseEnter={() => {
                            setHoveredItem({ skillId: skill.id, index: idx });
                          }}
                          onMouseLeave={() => {
                            setHoveredItem({ skillId: null, index: null });
                          }}
                        >
                          <span className="me-2 pe-1">{skill.icons[idx]}</span>
                          {list}
                          {skill.id !== 4 && skill.status[idx] && (
                            <IoMdArrowDropdown
                              className={`ms-2 ${style.dropDown} ${
                                hoveredItem.skillId === skill.id &&
                                hoveredItem.index === idx &&
                                skill.id !== 4 &&
                                style.arrowDirection
                              }`}
                            />
                          )}
                        </li>
                      </div>
                      {hoveredItem.skillId === skill.id &&
                        hoveredItem.index === idx &&
                        skill.id !== 4 &&
                        skill.status?.[idx] === true && (
                          <div
                            style={{
                              left: skill.id === 1 && idx === 6 && "45%",
                            }}
                            className={`${style.skillDetails} ${
                              darkMode && style.skillDetailsDark
                            } ${
                              skill.id === 1 &&
                              (idx === 6 || idx === 7 || idx === 8) &&
                              style.skillDetailShift
                            }`}
                          >
                            <h6
                              className={`mb-2 ${
                                skill.id === 2 && idx === 4
                                  ? darkMode
                                    ? style.detailsHdsDark
                                    : style.detailsHdsLight
                                  : ""
                              }`}
                            >
                              <span className="me-2 pe-1">
                                {skill.icons[idx]}
                              </span>
                              <span
                                className={`${style.overlayHds} ${
                                  darkMode
                                    ? style.overlayHdsDark
                                    : style.overlayHdsLight
                                }`}
                              >
                                {list}
                              </span>
                            </h6>
                            <p className="m-0 fw-medium">
                              {skill.description[idx]}
                            </p>
                          </div>
                        )}
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-3 pt-sm-2">
            <h3 className="text-center mt-3 mt-sm-4 px-md-4 fs-4">
              Building{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                scalable
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                user-focused
              </strong>{" "}
              web applications <br /> using{" "}
              <strong
                style={{ color: "var(--accent-primary)", lineHeight: "35px" }}
              >
                modern technologies
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                clean architecture
              </strong>
              .
            </h3>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Skills;
