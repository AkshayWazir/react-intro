import React from "react";
import "./styles.css";
import Logo from "../assets/logo.svg";
import CardComp from "./Card";

const BodyCard = () => {
  const array = [new Card("Lite", 11, "Try 7 days for free", Logo), new Card("pro", 40, "Monthly", Logo), new Card("Premium", 140, "Yearly", Logo)];
  return (
    <div className="container">
      {array.map((item) => (
        <CardComp item={item} />
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
