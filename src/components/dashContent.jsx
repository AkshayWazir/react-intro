import React from "react";
import "./styles.css";
import Picture1 from "../assets/shirt.png";
import Picture2 from "../assets/shoes.png";
import Picture3 from "../assets/cap.png";
import Picture4 from "../assets/shorts.png";
import { ShoppingItem } from "../components";

export default function DashboardContainer(props) {
  const { addItem, removeItem } = props;
  const items = [
    new Item(0, Picture1, "Shirt", 200),
    new Item(1, Picture2, "Shoes", 1000),
    new Item(2, Picture3, "Cap", 500),
    new Item(3, Picture4, "Shorts", 400),
  ];

  return (
    <div className="dash-container">
      {items.map((item) => (
        <ShoppingItem data={item} key={item.id} addItem={addItem} removeItem={removeItem} />
      ))}
    </div>
  );
}

class Item {
  constructor(itemId, image, title, price) {
    this.id = itemId;
    this.image = image;
    this.title = title;
    this.price = price;
  }
}
