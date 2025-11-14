import style from "./Contact.module.css";
import Hedding from "../CommonComponent/Hedding";
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaGithubSquare, FaTelegram, FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";

import { useState } from "react";
import { useTheme } from "../../ContextStore/ContextStore";

const Contact = () => {
  const { darkMode } = useTheme();

  const socials = [
    {
      id: 1,
      icon: <FaGithubSquare />,
      link: "https://github.com/Ayan-webDEV",
    },
    {
      id: 2,
      icon: <FaTelegram />,
      link: "https://t.me/ayan_fs_dev",
    },
    { id: 3, icon: <TbBrandLinkedinFilled />, link: "" },
    { id: 4, icon: <FaInstagramSquare />, link: "" },
    { id: 5, icon: <FaSquareFacebook />, link: "" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://form-proxy-six.vercel.app/api/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("⚠️ Failed to send message. Please try again.");
      }
    } catch (error) {
      //console.error("Error:", error);
      alert("❌ Network error. Please check your connection.");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="container-fluid my-4 pt-3 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container">
          <Hedding hds={"Contact Me"} cursor={"💬"} />
          <div
            className={`row justify-content-center justify-content-lg-around ${
              style.wholeContactCont
            } ${darkMode ? style.contactDark : style.contactLight}`}
          >
            <div className="col-12 col-lg-5">
              <h2
                className={style.getInTouchHds}
                style={{ color: !darkMode ? "#7a4a26" : "#38BDF8" }}
              >
                Let’s Connect
              </h2>
              <p
                className={style.getInTouchslog}
                style={{ color: !darkMode ? "#a56b47" : "#14a1ddff" }}
              >
                I’d love to hear from you!
              </p>
              <p className={style.getInTouchPara}>
                Whether you have questions, feedback, or simply wish to reach
                out — feel free to drop a message using the form.
              </p>
              <h6
                className={`d-flex align-items-center ${style.contactConect}`}
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=ayan.fsdev%2Bportfolio@gmail.com&su=Portfolio%20Contact&body=Hi%20sir%2C%20I%20want%20to%20connect.",
                    "_blank"
                  )
                }
              >
                <IoMailUnreadOutline
                  className={style.mailIcon}
                  style={{
                    fontSize: "1.3rem",
                    color: !darkMode ? "#7A4A26" : "#38BDF8",
                  }}
                />{" "}
                <span className={`ms-3 ps-2 ${style.getInTouchEmail}`}>
                  ayan.fsdev+portfolio@gmail.com
                </span>
              </h6>
              <div
                className={`d-flex align-items-center mb-5 pb-4 mb-lg-0 pb-lg-0 ${style.contactConect}`}
              >
                <AiFillLike
                  style={{
                    fontSize: "1.3rem",
                    color: !darkMode ? "#7A4A26" : "#38BDF8",
                  }}
                />
                <div className="ms-3">
                  {socials.map((social) => (
                    <span
                      key={social.id}
                      className={style.socialIcons}
                      onClick={() => window.open(social.link, "_Blank")}
                    >
                      {social.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={`col-12 col-lg-5 ${style.formContainer}`}>
              <form onSubmit={handleSubmit}>
                <div>
                  <p className={style.formInputText}>
                    Enter Full Name{" "}
                    <span className={style.requiredMark}>*</span>
                  </p>
                  <input
                    className={`${style.formInput} ${
                      !darkMode ? style.formInputLgt : style.formInputDrk
                    }`}
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <p className={style.formInputText}>
                    Email <span className={style.requiredMark}>*</span>
                  </p>
                  <input
                    className={`${style.formInput} ${
                      !darkMode ? style.formInputLgt : style.formInputDrk
                    }`}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <p className={style.formInputText}>
                    Message! <span className={style.requiredMark}>*</span>
                  </p>
                  <textarea
                    className={`${style.formInput} ${style.formTextarea} ${
                      !darkMode ? style.formInputLgt : style.formInputDrk
                    }`}
                    name="message"
                    placeholder="Type Here!"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className={`${style.formSubmitBtn} ${
                      !darkMode ? style.formSubmitLgt : style.formSubmitDrk
                    }`}
                    style={{
                      backgroundColor: !darkMode ? "#b25c2e" : "#38BDF8",
                      border: `2px solid ${!darkMode ? "#b25c2e" : "#38BDF8"}`,
                    }}
                  >
                    Reach Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
