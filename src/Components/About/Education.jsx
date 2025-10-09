import style from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div>
      <h3 className="m-0 d-flex align-items-center">
        <FaGraduationCap
          className="me-3"
          style={{ color: "var(--accent-primary)" }}
        />
        Education
      </h3>
    </div>
  );
};
export default Education;
