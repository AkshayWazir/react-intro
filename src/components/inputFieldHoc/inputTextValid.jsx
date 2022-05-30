import React from "react";
import HocInput from "./hoc";
import "./styles.css";

const InputTextValid = (props) => {
  const { validationFunction, error } = props;

  function validationCheck(event) {
    const value = event.target.value;
    validationFunction(value);
  }

  return (
    <div className="input-text-valid-cont">
      <input className="input-text-valid" onChange={validationCheck} />
      <p className="error-message">{error ? "Input content Incorrect" : ""}</p>
    </div>
  );
};

export default HocInput(InputTextValid);
