import React from "react";
import "./styles.css";

export default function GenButton(props) {
  const { type = 0, extStyles = {}, title = "", onClickAction = () => {} } = props;

  function classGen() {
    return type < 4 && type >= 0 ? `type-${type}` : "type-0";
  }

  return (
    <div style={extStyles} className={classGen()} onClick={onClickAction}>
      {title}
    </div>
  );
}
