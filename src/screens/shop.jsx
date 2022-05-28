import React from "react";
import "./styles.css";
import { ErrorBoundary } from "../components";

class ShopDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { title: "Tootbrush", price: 40, quant: 0, id: 0 },
        { title: "Flipflops", price: 400, quant: 0, id: 1 },
        { title: "Soap", price: 50, quant: 0, id: 2 },
        { title: "Juice", price: 70, quant: 0, id: 3 },
      ],
    };
  }

  increment = (id) => {
    const res = this.state.cards.map((item) => {
      if (item.id === id) {
        return { ...item, quant: item.quant + 1 };
      } else if (id === 0) {
        throw new Error("I Crashed");
      } else {
        return item;
      }
    });

    this.setState({ cards: res });
  };

  decrement = (id) => {
    const res = this.state.cards.map((item) => {
      if (item.id === id && item.quant > 0) {
        return { ...item, quant: item.quant - 1 };
      } else {
        return item;
      }
    });
    this.setState({ cards: res });
  };

  render() {
    const { cards } = this.state;
    let totalQuant = cards.reduce((a, b) => a + b.quant, 0),
      totalPrice = cards.reduce((a, b) => a + b.price * b.quant, 0);

    return (
      <div>
        <div>
          <p className="title-content">
            Total Content : {totalQuant} , Total Price : {totalPrice}
          </p>
        </div>
        <div className="card-arrangement">
          {cards.map((item) => {
            const { title, price, quant, id } = item;
            return (
              //   <ErrorBoundary key={id}>
              <div className="card-container" key={id}>
                <p>{title}</p>
                <p>{price}</p>
                <div className="arrange-horizontal">
                  <div className="increment" onClick={() => this.increment(id)}>
                    +
                  </div>
                  {quant}
                  <div className="increment" onClick={() => this.decrement(id)}>
                    -
                  </div>
                </div>
              </div>
              //   </ErrorBoundary>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopDashboard;
