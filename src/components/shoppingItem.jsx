import React, { useState } from "react";
import "./styles.css";

export default function ShoppingItem(props) {
  const { data, addItem, removeItem } = props;
  const [inventory, setInvetory] = useState(0);

  function addItemToBasket(params) {
    addItem(data);
    setInvetory(inventory + 1);
  }

  function removeItemFromBasket() {
    removeItem(data);
    setInvetory(inventory > 0 ? inventory - 1 : 0);
  }

  return (
    <div className="shopping-container">
      <img src={data.image} className="shopping-img" />
      <div>
        <div className="shopping-info">
          <p className="shopping-title">{data.title}</p>
          <p className="shopping-price">{data.price}</p>
        </div>
        <div className="shopping-buttons">
          <p className="text-button" onClick={removeItemFromBasket}>
            -
          </p>
          <p>{inventory}</p>
          <p className="text-button" onClick={addItemToBasket}>
            +
          </p>
        </div>
      </div>
    </div>
  );
}
