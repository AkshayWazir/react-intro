import React from "react";
import HocInput from "./hoc";
import "./styles.css";

const InputWithCss = (props) => {
  const { validationFunction, error } = props;

  function validationCheck(event) {
    const value = event.target.value;
    validationFunction(value);
  }

  return (
    <div className="input-text-valid-cont">
      <input className={error ? "input-text-invalid" : "input-text-valid"} onChange={validationCheck} />
    </div>
  );
};

export default HocInput(InputWithCss);
