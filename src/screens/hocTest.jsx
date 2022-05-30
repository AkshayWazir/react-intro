import React from "react";
import "./styles.css";
import OnClickCount from "../components/counter/onClickCounter";
import OnHoverCounter from "../components/counter/onHoverCounter";

const CounterScreen = (props) => {
  return (
    <div>
      <OnClickCount />
      <OnHoverCounter />
    </div>
  );
};

export default CounterScreen;
