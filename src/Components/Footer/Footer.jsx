import style from "./Footer.module.css";
import { useTheme } from "../../ContextStore/ContextStore";
import Logo from "../CommonComponent/Logo";

import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { darkMode } = useTheme();

  const sectionLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/Ayan-webDEV",
    },
    { id: 2, name: "Linkedin", icon: <FaLinkedin />, link: "" },
    {
      id: 3,
      name: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/ayan_fs_dev",
    },
    { id: 4, name: "Instagram", icon: <FaInstagram />, link: "" },
    { id: 5, name: "Twitter (X)", icon: <FaXTwitter />, link: "" },
  ];

  return (
    <footer
      className="container-fluid mt-5"
      style={{
        backgroundColor: darkMode ? "#0e131fff" : "#ebebebff",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="container pt-5 pb-3">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-lg-5"
            style={{
              borderRight: `2px solid ${darkMode ? "#1f1f41ff" : "#a5a5a5ff"}`,
            }}
          >
            <div className="text-center pb-3">
              <Logo />
            </div>
            <div className="text-center">
              <h3 className={style.footerStack}>
                <span className="d-inline-block me-2">
                  {" "}
                  Java Full-Stack{" "}
                  <span
                    className="d-inline-block me-2"
                    style={{ color: darkMode ? "#c0abffff" : "#1F3A93" }}
                  >
                    Developer
                  </span>{" "}
                </span>{" "}
                <br />
                <span
                  className="d-inline-block my-1"
                  style={{ color: "var(--accent-primary)" }}
                >
                  &
                </span>{" "}
                <br />
                <span className="d-inline-block ms-2">
                  UI/UX{" "}
                  <span style={{ color: darkMode ? "#ffa8d9ff" : "#008577ff" }}>
                    Designer
                  </span>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-7 px-lg-0">
            <div>
              <div
                className={`d-flex flex-column flex-md-row flex-wrap justify-content-evenly ${style.sectionsCont}`}
              >
                {sectionLinks.map((section) => (
                  <div key={section.id} className={style.sectionsLinkItem}>
                    <a
                      className={`${style.sectionsLink} ${
                        !darkMode && style.sectionLinkLgt
                      } `}
                      style={{
                        borderRight:
                          section.id === 4 || section.id === 5 ? "none" : "",
                      }}
                      href={section.link}
                    >
                      {section.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`d-flex flex-wrap justify-content-evenly ${style.socialWrapperCont}`}
            >
              {socialLinks.map((social) => (
                <div
                  key={social.id}
                  className={`${style.socialsCont} ${
                    !darkMode && style.socialsContLgt
                  }`}
                  onClick={() => window.open(social.link, "_Blank")}
                  style={{ marginTop: "8px" }}
                >
                  <span
                    className={`${style.socialsIcons} ${
                      !darkMode && style.socialsIconsLgt
                    }`}
                  >
                    {social.icon}
                  </span>{" "}
                  <span
                    className={`${style.socialsName} ${
                      !darkMode && style.socialsNameLgt
                    }`}
                  >
                    {social.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Footer */}
          <div className="col-12 text-center mt-5">
            <div
              className="pt-3"
              style={{
                borderTop: `2px solid ${darkMode ? "#1f1f41ff" : "#a5a5a5ff"}`,
                fontWeight: "500",
              }}
            >
              <span style={{ fontSize: "17px" }}>©</span>{" "}
              <span
                className="fw-bold"
                style={{
                  color: darkMode
                    ? "var(--accent-secondary)"
                    : "var(--accent-primary)",
                }}
              >
                2025
              </span>{" "}
              Ayan.{" "}
              <span
                className="fw-bold"
                style={{ color: darkMode ? "#A673D0" : "#8800f7ff" }}
              >
                All
              </span>{" "}
              Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
