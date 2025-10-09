import style from "./Hedding.module.css";

const Hedding = ({ hds, cursor }) => {
  let count = hds.length;

  // console.log(count);  //just for debuging

  return (
    <div>
      <div>
        <h2 className={style.hedding}>
          {hds}
          <span className={style.cursor}>{cursor}</span>
        </h2>
      </div>
      <div
        className={`${style.common} ${
          count >= 7 ? style.hightlightTextLong1 : style.hightlightTextshort1
        }`}
      ></div>
      <div
        className={`${style.common} ${
          count >= 7 ? style.hightlightTextLong2 : style.hightlightTextShort2
        }`}
      ></div>
    </div>
  );
};
export default Hedding;
