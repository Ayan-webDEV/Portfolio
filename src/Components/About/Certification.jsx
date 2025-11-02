import style from "./Certification.module.css";
import { LiaCertificateSolid } from "react-icons/lia";
import pyCertificate from "../../assets/python-certificate.jpg";

const Certification = () => {
  const openImage = () => {
    window.open(pyCertificate, "_blank");
  };

  return (
    <section className="mt-4 pt-sm-2 mt-lg-0 pt-lg-0 mb-3">
      <h3 className="m-0 mb-4 mb-sm-0 pb-2 pb-sm-0 d-flex align-items-center fw-bold">
        <LiaCertificateSolid
          className="me-3"
          style={{ color: "var(--accent-secondary)" }}
        />
        Certification
      </h3>
      <div className={style.wholeCertificateCont}>
        <div className={style.certificate}>
          <img src={pyCertificate} className={style.certificateImg} alt="" />
          <div className={style.certificateContent}>
            <h3 className="mt-2 fw-bold">Python Certificate</h3>
            <p className="my-3 pb-2">
              Gained hands-on training in Python fundamentals, including loops,
              OOP, and modules, enhancing my logical problem-solving skills as a
              Diploma fresher.
              <span className="d-block mt-2">
                my core expertise as a Java Full Stack Web Developer
              </span>
            </p>
            <div className=" d-flex justify-content-around">
              <button onClick={openImage} className={style.certificateBtn}>
                View Full Image
              </button>
              <a href={pyCertificate} download="python-certificate.jpg">
                <button className={style.certificateBtn}>Download Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certification;
