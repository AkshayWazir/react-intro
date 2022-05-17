import React, { useState } from "react";
import "./styles.css";
import { DashContainer, Header } from "../components";

export default function Dashboard() {
  const [cart, setCart] = useState([]);

  function addItemsToCart(item) {
    let temp = [...cart, item];
    console.log(temp);
    setCart([...cart, item]);
  }

  function removeItem(item) {
    let temp,
      found = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id) {
        temp = [...cart.slice(0, i), ...cart.slice(i + 1, cart.length)];
        found = true;
        break;
      }
    }
    setCart(found ? temp : cart);
  }

  return (
    <div className="dashboard-main-container">
      <Header items={cart.length} totalCost={cart.reduce((a, b) => a + b.price, 0)} />
      <DashContainer addItem={addItemsToCart} removeItem={removeItem} />
    </div>
  );
}
