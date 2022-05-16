import React, { useState } from "react";
import "./styles.css";

export default function InputField(props) {
  const { value, fetchValue = () => {} } = props;

  function fieldValueChange(event) {
    fetchValue(event.target.value);
  }

  return (
    <span>
      <input value={value} onChange={fieldValueChange} />
    </span>
  );
}
