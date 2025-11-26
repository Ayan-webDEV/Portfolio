import style from "./Project.module.css";
import { useTheme } from "../../ContextStore/ContextStore";

import portfolioImgLgt from "../../assets/project-portfolio-lightTheme.png";
import portfolioImgDrk from "../../assets/project-portfolio-darkTheme.png";
import myntraImg from "../../assets/myntra-project.png";

import Hedding from "../CommonComponent/Hedding";
import Divider from "../CommonComponent/Divider";

import { FaGithub } from "react-icons/fa";

const Project = () => {
  const { darkMode } = useTheme();

  const portfolio = () => {
    window.open("https://github.com/Ayan-webDEV/Portfolio", "_Blank");
  };
  const myntra = () => {
    window.open("https://github.com/Ayan-webDEV/myntra-replica", "_Blank");
  };

  const projects = [
    {
      id: 1,
      image: darkMode ? portfolioImgLgt : portfolioImgDrk,
      title: "Personal Portfolio",
      description:
        "Interactive React portfolio highlighting my work, abilities, and proficiency with refined aesthetics and seamless performance.",
      stacks: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React.js",
        "Git & Github",
        "Vercel",
      ],
      link: portfolio,
      site: () => window.location.reload(),
    },
    {
      id: 2,
      image: myntraImg,
      title: "Myntra Replica",
      description:
        "Modern React Myntra clone highlighting product catalog, adaptive UI, and seamless cart experience with polished design.",
      stacks: [
        "HTML5",
        "CSS3",
        "Tailwind",
        "React.js",
        "Git & Github",
        "Vercel",
      ],
      link: myntra,
      site: () => window.open("https://myntra-replica-am.vercel.app", "_Blank"),
    },
    {
      id: 3,
      image: null,
      title: "E-Commerce",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      stacks: [],
    },
    {
      id: 4,
      image: null,
      title: "Chat Web App",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      stacks: [],
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="container-fluid my-4 pt-3 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container">
          <Hedding hds={"Projects"} cursor={"⌘"} />

          <div className="mt-5 mt-lg-4">
            <h4 className={`${style.projectHdsCommon} ${style.projectHdsMob}`}>
              ⚡ Turning Ideas <br />
              <span style={{ color: "var(--text-color)" }}>
                into
              </span> <br /> Impactful Code
            </h4>
            <h4
              className={`${style.projectHdsCommon} ${style.projectHdsTblet}`}
            >
              ⚡ Turning Creative Ideas <br />
              <span style={{ color: "var(--text-color)" }}>
                into
              </span> <br /> Impactful Code
            </h4>
            <h4 className={`${style.projectHdsCommon} ${style.projectHds}`}>
              ⚡ Turning Ideas{" "}
              <span style={{ color: "var(--text-color)" }}>into</span> Impactful
              Code
            </h4>
            <article
              className={`${style.projectDetailsMob} ${style.projectDetailsCommon}`}
            >
              Each project I build shows my passion for turning ideas into
              real-world apps. As a 5th-semester CSE student, I focus on clean
              design and modern tech. I create frontends with{" "}
              <span className={style.projectDetailHighlights}>
                React + Tailwind CSS{" "}
              </span>
              and backends using{" "}
              <span className={style.projectDetailHighlights}>Java</span>. My
              work involves{" "}
              <span className={style.projectDetailHighlights}>MySQL</span> and{" "}
              <span className={style.projectDetailHighlights}>responsive</span>,{" "}
              <span>user-friendly</span> interfaces. Every project moves me
              closer to becoming a skilled{" "}
              <span className={style.projectDetailHighlights}>
                full-stack developer
              </span>
              .
            </article>
            <article
              className={`${style.projectDetailsTblet} ${style.projectDetailsCommon}`}
            >
              Each project I build reflects my passion for turning ideas into
              real-world solutions. As a 5th-semester Diploma CSE student, I
              focus on clean design and strong logic. I develop frontends using{" "}
              <span className={style.projectDetailHighlights}>React</span> and{" "}
              <span className={style.projectDetailHighlights}>
                Tailwind CSS
              </span>
              , and backends with{" "}
              <span className={style.projectDetailHighlights}>Java</span>. My
              projects also explore{" "}
              <span className={style.projectDetailHighlights}>
                MySQL data handling
              </span>{" "}
              and smooth{" "}
              <span className={style.projectDetailHighlights}>
                UI experiences
              </span>
              . Every task enhances my understanding of development and best
              practices. Each project strengthens my path toward becoming a
              skilled{" "}
              <span className={style.projectDetailHighlights}>
                full-stack developer
              </span>
              .
            </article>
            <article
              className={`${style.projectDetailsLpt} ${style.projectDetailsCommon} `}
            >
              Each project I build reflects my passion for transforming concepts
              into real-world applications. As a 5th-semester Diploma CSE
              student, I focus on clean design, logical thinking, and modern
              tech. I craft frontends with{" "}
              <span className={style.projectDetailHighlights}>
                React + Tailwind CSS
              </span>{" "}
              and backends using{" "}
              <span className={style.projectDetailHighlights}>Java</span>. My
              work explores{" "}
              <span className={style.projectDetailHighlights}>
                MySQL data handling
              </span>{" "}
              and{" "}
              <span className={style.projectDetailHighlights}>
                responsive, user-friendly
              </span>{" "}
              interfaces. I continuously refine my coding style to ensure{" "}
              <span className={style.projectDetailHighlights}>
                Extensiblility
              </span>{" "}
              and performance. Every project challenges me to learn new tools
              and{" "}
              <span className={style.projectDetailHighlights}>
                problem-solving techniques
              </span>
              . Each creation strengthens my journey toward becoming a skilled{" "}
              <span className={style.projectDetailHighlights}>
                full-stack developer
              </span>
              .
            </article>
          </div>
          <div className="my-5 pt-2 pb-lg-1">
            <h4 className={`${style.projectsTitle} ${style.projectsTitleMob}`}>
              Projects That Define My <br />{" "}
              <span className={style.projTitleHighLight}>Journey</span>
            </h4>
            <h4
              className={`${style.projectsTitle} ${style.projectsTitleNonMob}`}
            >
              Projects That Define My{" "}
              <span className={style.projTitleHighLight}>Journey</span>
            </h4>

            <div className="row justify-content-sm-between justify-content-center mt-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`col-12 col-sm-6 col-lg-4 ${style.projectsCard} ${
                    !darkMode && style.projectCardLgt
                  }`}
                >
                  <div>
                    <img
                      src={project.image}
                      className={style.projectImg}
                      alt=""
                    />
                  </div>
                  <h4 className={style.projectName}>{project.title}</h4>
                  <p
                    className={style.projectDescription}
                    style={{
                      color: darkMode ? "#dadadaff" : "#2c2c2cff",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {project.description}
                  </p>
                  <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    <span className="fw-semibold">Used Stack :</span>{" "}
                    {project.stacks.map((stack, idx) => (
                      <span key={idx} className={style.projectStacks}>
                        {stack}{" "}
                      </span>
                    ))}
                  </p>
                  <div className="d-flex flex-wrap justify-content-between mt-2">
                    <button
                      className={style.viewProjectBtn}
                      onClick={project.link}
                    >
                      View On Github
                    </button>
                    <button
                      className={`${style.viewProjectBtn} ${style.viewSite}`}
                      onClick={project.site}
                    >
                      view site
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p
                className={`${style.projectsClosingLines} ${style.forBigScreen}`}
              >
                Each project reflects my commitment to developing{" "}
                <span className="d-block">
                  <span className={style.projectsClosingHighlights}>
                    Robust
                  </span>
                  ,{" "}
                  <span className={style.projectsClosingHighlights}>
                    Dynamic
                  </span>
                  , and{" "}
                  <span className={style.projectsClosingHighlights}>
                    Aesthetically Refined
                  </span>
                </span>{" "}
                web solutions through{" "}
                <span className={style.projectsClosingHighlights}>Clean</span>,{" "}
                <span className={style.projectsClosingHighlights}>Modular</span>
                , and Well-Architected code design.
              </p>
              <p
                className={`${style.projectsClosingLines} ${style.forSmallScreen}`}
              >
                Crafting{" "}
                <span className={style.projectsClosingHighlights}>Robust</span>,{" "}
                <span className={style.projectsClosingHighlights}>Dynamic</span>
                , and{" "}
                <span className={style.projectsClosingHighlights}>Refined</span>{" "}
                web solutions with{" "}
                <span className={style.projectsClosingHighlights}>Clean</span>,{" "}
                <span className={style.projectsClosingHighlights}>Modular</span>
                , and Well-Structured code.
              </p>
              <p
                className={`${style.projectsClosingLines} ${style.forMediumScreen}`}
              >
                Each project reflects my commitment to building{" "}
                <span className={style.projectsClosingHighlights}>Robust</span>,{" "}
                <span className={style.projectsClosingHighlights}>Dynamic</span>
                , and{" "}
                <span className={style.projectsClosingHighlights}>Refined</span>{" "}
                web solutions through{" "}
                <span className={style.projectsClosingHighlights}>Clean</span>,{" "}
                <span className={style.projectsClosingHighlights}>Modular</span>
                , and Well-Structured code design.
              </p>
            </div>
            <div className="d-flex justify-content-center ">
              <div className={style.seeAllProjectBtnCont}>
                <button
                  className={style.seeAllProjectBtn}
                  onClick={() => {
                    window.open(
                      "https://github.com/Ayan-webDEV?tab=repositories",
                      "_Blank"
                    );
                  }}
                >
                  <FaGithub style={{ fontSize: "1.2rem" }} /> See All
                  Repositories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />{" "}
    </>
  );
};
export default Project;
