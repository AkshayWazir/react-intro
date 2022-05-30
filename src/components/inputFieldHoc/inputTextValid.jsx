import React, { Fragment, useState } from "react";
import "./styles.css";

const InputTextValid = (props) => {
  const { validationFunction = () => true } = props;
  const [errorMessage, setErrorMessage] = useState("");

  function validationCheck(event) {
    const value = event.target.value;
    if (!validationFunction(value)) {
      setErrorMessage("Input content Incorrect");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div className="input-text-valid-cont">
      <input className="input-text-valid" onChange={validationCheck} />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default InputTextValid;
