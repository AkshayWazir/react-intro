import React from "react";
import "./styles.css";

export default function InputField(props) {
  const { value, fetchValue = () => {}, hint = "Some Text", type = "" } = props;

  function fieldValueChange(event) {
    fetchValue(event.target.value);
  }

  function contentGen(type) {
    switch (type) {
      case "checkbox":
        return <input value={value} onChange={fieldValueChange} className="input-field-checkbox" type="checkbox" />;
      default:
        return <input value={value} onChange={fieldValueChange} placeholder={hint} className="input-field" />;
    }
  }

  return (
    <span className={type === "checkbox" ? "align-horizontal" : "normal"}>
      {contentGen(type)}
      {type === "checkbox" && <p className="input-field-checkbox-hint">{hint}</p>}
    </span>
  );
}
