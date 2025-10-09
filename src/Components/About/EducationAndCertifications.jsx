import Education from "./Education";
import Certification from "./Certification";
const EducationAndCertifications = () => {
  return (
    <div className="row mt-4 pt-1 pt-sm-2 pt-lg-3">
      <div className="col-12 col-lg-6">
        <Education />
      </div>
      <div className="col-12 col-lg-6">
        <Certification />
      </div>
    </div>
  );
};
export default EducationAndCertifications;
