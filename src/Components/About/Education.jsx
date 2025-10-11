import style from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "../../ContextStore/ContextStore";

const Education = () => {
  const { darkMode } = useTheme();

  const education = [
    {
      id: 1,
      date: "2023-2026",
      qualification: "Diploma (CSE)",
      status: true,
      about:
        "Pursuing Diploma in Computer Science (5th Semester), skilled in coding, problem-solving, and developing innovative, efficient software solutions using modern technologies.",
    },
    {
      id: 2,
      date: "2023",
      qualification: "Matric",
      status: false,
      about:
        "Completed Matriculation in 2023 from High School Chitarpur, Ramgarh (Jharkhand) 825101, showcasing strong academic foundation and consistent performance.",
    },
  ];

  return (
    <div>
      <h3 className="m-0 d-flex align-items-center fw-bold">
        <FaGraduationCap
          className="me-3"
          style={{ color: "var(--accent-primary)" }}
        />
        Education
      </h3>

      <div className={style.eduContentsContainer}>
        {education.map((edu) => (
          <div key={edu.id} className={style.eduCont}>
            <div
              className={`${style.eduContents} ${
                !darkMode && style.eduContentsLgt
              }`}
            >
              {" "}
              <h5 className={style.eduDate}>
                <FaCalendarAlt
                  style={{
                    fontSize: "15px",
                    color: "var(--accent-primary)",
                    marginRight: "10px",
                  }}
                />
                {edu.date}
              </h5>
              <h3 className={style.eduquali}>
                {edu.qualification}{" "}
                {edu.status === true && <span className={style.status}></span>}
              </h3>
              <p className={style.eduAbout}>{edu.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Education;
