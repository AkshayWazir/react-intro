import React from "react";
import "./styles.css";

const CardComp = (props) => {
  const { item } = props;
  return (
    <div className="card-body">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <img src={item.image} className="card-tolltip" />
        <p className="card-title">{item.title}</p>
      </div>
      <p style={{ margin: "0vh 0 1vh 0" }}>Perfect to getstarted</p>
      <div className="styles-informal">
        $<b className="price-bold">{item.price}</b> <span className="smallText">per seat / month</span>
      </div>
      <div className="button">{item.button}</div>
    </div>
  );
};

export default CardComp;
