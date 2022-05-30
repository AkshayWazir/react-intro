import React, { Fragment } from "react";
import "./styles.css";
import OnClickCount from "../components/counter/onClickCounter";
import OnHoverCounter from "../components/counter/onHoverCounter";
import { InputDataDisp, InputTextValid, InputWithCss } from "../components/inputFieldHoc";

const CounterScreen = (props) => {
  function validText(value) {
    for (let char of value) {
      if (char !== char.toLowerCase()) {
        return false;
      }
    }
    return true;
  }
  return (
    <Fragment>
      {/* <OnClickCount />
      <OnHoverCounter /> */}
      <InputDataDisp validationFunction={validText} />
      <InputTextValid validationFunction={validText} />
      <InputWithCss validationFunction={validText} />
    </Fragment>
  );
};

export default CounterScreen;
