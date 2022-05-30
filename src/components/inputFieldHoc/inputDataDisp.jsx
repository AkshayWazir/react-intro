import React, { useState } from "react";
import HocInput from "./hoc";
import "./styles.css";

const InputDataDisp = (props) => {
  const { validationFunction, error } = props;
  const [content, setContent] = useState("");

  function validationCheck(event) {
    const value = event.target.value;
    validationFunction(value);
    setContent(value);
  }

  return (
    <div className="input-text-valid-cont">
      <input className="input-text-valid" onChange={validationCheck} />
      <p className={error ? "error-message" : "normal-message"}>{content}</p>
    </div>
  );
};

export default HocInput(InputDataDisp);
