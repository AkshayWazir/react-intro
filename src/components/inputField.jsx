import React, { useState } from "react";
import "./styles.css";

export default function InputField(props) {
  const {} = props;
  const [content, setContent] = useState();

  function fieldValueChange(event) {
    setContent(event.target.value);
  }

  return (
    <span>
      <input value={content} onChange={fieldValueChange} />
    </span>
  );
}
