import style from "./Home.module.css";

import { useTheme } from "../../ContextStore/ContextStore";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";

const Home = () => {
  const { darkMode } = useTheme();

  const socials = [
    {
      id: 1,
      icon: <FaGithub />,
      name: "GitHub",
      handleClick: () =>
        window.open(
          "https://github.com/Ayan-webDEV?tab=repositories",
          "_blank"
        ),
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      name: "LinkedIn",
      handleClick: () => window.open("", "_blank"),
    },
    {
      id: 3,
      icon: <MdEmail />,
      name: "Email",
      handleClick: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=ayanalamdev@gmail.com",
          "_blank"
        ),
    },
  ];

  return (
    <section id="home">
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-7">
              <div className={style.homeContentContainer}>
                <h1 className={style.homeContHds1}>Hi 👋, I’m Ayan Alam</h1>
                <h2 className={style.homeContHds2}>
                  Full Stack Web Developer, <br />{" "}
                  <span
                    className="d-block mt-1"
                    style={{ color: darkMode ? "#fff" : "#000" }}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          `<span style="color:var(--bracket)">(</span><span style="color:var(--accent-secondary)">React/Redux, Java</span><span style="color:var(--bracket)">)</span>`,
                          `<span style="color:var(--accent-secondary)">UI/UX Designer</span>`,
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 107, // typing speed
                        deleteSpeed: 65, // backspace speed
                        pauseFor: 1700, // pause before deleting
                      }}
                    />
                  </span>
                </h2>
                <p className={style.homeContPara}>
                  I build scalable, high-performance, and responsive full stack
                  web applications using
                  <FaReact
                    className={`${
                      darkMode ? style.reactIcon : style.reactIconLght
                    }`}
                  />
                  React &<RiJavaLine className={style.javaIcon} />
                  Java, applying innovative design principles and robust
                  architecture.
                </p>
                <div className={style.buttonCont}>
                  <a
                    href="#projects"
                    className={`${style.projectsBtn} ${
                      !darkMode && style.btnsLight
                    }`}
                  >
                    View Projects
                  </a>
                  <button
                    className={`${style.resumeBtn} ${
                      !darkMode && style.btnsLight
                    }`}
                  >
                    Download Resume
                  </button>
                </div>
                <div className={style.socialsCont}>
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      className={style.socials}
                      onClick={social.handleClick}
                    >
                      <span className="d-inline-block me-1">{social.icon}</span>{" "}
                      <span className={style.socialsName}>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
