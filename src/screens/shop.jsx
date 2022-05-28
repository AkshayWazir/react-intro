import React from "react";
import "./styles.css";

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

  increment = (id) => {};

  decrement = (id) => {};

  render() {
    const { cards } = this.state;
    let totalQuant = 0,
      totalPrice = 0;

    // TODO : calculate and display total quantity and price
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
              <div className="card-container">
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopDashboard;
