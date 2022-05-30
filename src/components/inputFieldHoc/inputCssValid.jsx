import React, { useState } from "react";
import "./styles.css";

const InputWithCss = (props) => {
  const { validationFunction = () => true } = props;
  const [error, setError] = useState(false);

  function validationCheck(event) {
    const value = event.target.value;
    if (!validationFunction(value)) {
      setError("Input content Incorrect");
    } else {
      setError("");
    }
  }

  return (
    <div className="input-text-valid-cont">
      <input className={error ? "input-text-invalid" : "input-text-valid"} onChange={validationCheck} />
    </div>
  );
};

export default InputWithCss;
