import style from "./Nav.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "../../ContextStore/ContextStore";
import { LuSunDim } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const Nav = () => {
  const { darkMode, handleToggleMode } = useTheme();

  // const [darkMode, setDarkMode] = useState(true);

  const [active, setActive] = useState("#home");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // const handleToggleMode = () => setDarkMode(!darkMode);

  const navSections = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav>
        <div className="py-2 py-lg-0">
          <div className="container d-flex justify-content-between align-items-center px-4 px-lg-2">
            <div className={style.logoCont}>
              <h3 className={style.logo}>
                AM{" "}
                <span style={{ color: "var(--accent-primary)" }}>
                  &lt; / &gt;
                </span>
              </h3>
            </div>
            <div className="d-flex">
              <ul className={`m-0 ${style.mobHidden}`}>
                {navSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={sec.href}
                    onClick={() => setActive(sec.href)}
                    className={`${style.navSections} ${
                      active === sec.href ? style.activeLink : ""
                    } ${!darkMode ? style.lightMode : ""}`}
                  >
                    {sec.name}
                  </a>
                ))}
              </ul>
              <div
                className={`${
                  darkMode ? style.togglerNight : style.togglerDay
                } ${style.togglerbtn}`}
                onClick={() => handleToggleMode()}
              >
                {darkMode ? <LuSunDim /> : <FaRegMoon />}
              </div>
            </div>
          </div>
        </div>
        <div className={style.mobSections}>
          <ul
            className={`p-0 m-0 ${style.mobVisible} ${
              darkMode ? style.mobVisibleDark : style.mobVisibleLight
            }`}
          >
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={sec.href}
                onClick={() => setActive(sec.href)}
                className={`${style.navSections} ${style.mobSt} ${
                  active === sec.href ? style.activeLink : ""
                } ${!darkMode ? style.lightMode : ""}`}
              >
                {sec.name}
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Nav;
