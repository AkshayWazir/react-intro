import React, { useState } from "react";
import "./styles.css";

const InputDataDisp = (props) => {
  const { validationFunction = () => true } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [content, setContent] = useState("");

  function validationCheck(event) {
    const value = event.target.value;
    setContent(value);
    setErrorMessage(!validationFunction(value));
  }

  return (
    <div className="input-text-valid-cont">
      <input className="input-text-valid" onChange={validationCheck} />
      <p className={errorMessage ? "error-message" : "normal-message"}>{content}</p>
    </div>
  );
};

export default InputDataDisp;
