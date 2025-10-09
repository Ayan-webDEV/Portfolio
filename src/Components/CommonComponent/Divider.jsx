const Divider = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div
          style={{
            margin: "4px 0",
            backgroundColor: "var(--divider)",
            // backgroundColor: "red",          //just for debuging
            height: "2px",
            width: "100%",
            borderRadius: "25px",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Divider;
