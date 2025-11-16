import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logoCont}>
      <h3 className={style.logo}>
        AM <span style={{ color: "var(--accent-primary)" }}>&lt; / &gt;</span>
      </h3>
    </div>
  );
};
export default Logo;
