import React, { Fragment } from "react";
import "./styles.css";
import OnClickCount from "../components/counter/onClickCounter";
import OnHoverCounter from "../components/counter/onHoverCounter";

const CounterScreen = (props) => {
  return (
    <Fragment>
      <OnClickCount />
      <OnHoverCounter />
    </Fragment>
  );
};

export default CounterScreen;
