import style from "./Contact.module.css";
import Hedding from "../CommonComponent/Hedding";
import Divider from "../CommonComponent/Divider";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="container-fluid my-4 pt-3 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container">
          <Hedding hds={"Contact Me"} cursor={"💬"} />
        </div>
      </section>
      <Divider />
    </>
  );
};
export default Contact;
