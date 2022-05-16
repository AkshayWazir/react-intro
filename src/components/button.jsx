import React from "react";

const Button = (props) => {
  const { title = "", action = () => {} } = props;
  return (
    <div className="button-back" onClick={() => action()}>
      <span className="button-text">{title}</span>
    </div>
  );
};

export default Button;
