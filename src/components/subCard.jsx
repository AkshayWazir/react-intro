import React from "react";
import "./styles.css";
import Logo from "../assets/logo.svg";

const BodyCard = () => {
  const array = [new Card("Lite", 11, "Try 7 days for free", Logo), new Card("pro", 40, "Monthly", Logo), new Card("Premium", 140, "Yearly", Logo)];
  return (
    <div className="container">
      {array.map((item) => (
        <div className="card-body">
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <img src={item.image} className="card-tolltip" />
            <p className="card-title">{item.title}</p>
          </div>
          <p>Perfect to getstarted</p>
          <div className="styles-informal">
            $<b className="price-bold">{item.price}</b> <span>per seat / month</span>
          </div>
        </div>
      ))}
    </div>
  );
};

class Card {
  constructor(title, price, button, image) {
    this.title = title;
    this.price = price;
    this.button = button;
    this.image = image;
  }
}

export default BodyCard;
