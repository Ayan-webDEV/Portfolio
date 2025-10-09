import style from "./Certification.module.css";
import { LiaCertificateSolid } from "react-icons/lia";

const Certification = () => {
  return (
    <div>
      <h3 className="m-0 d-flex align-items-center">
        <LiaCertificateSolid
          className="me-3"
          style={{ color: "var(--accent-secondary)" }}
        />
        Certification
      </h3>
    </div>
  );
};
export default Certification;
