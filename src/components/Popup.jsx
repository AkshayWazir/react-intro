import React, { Fragment } from "react";
import "./styles.css";

const PopupComp = (props) => {
  return (
    <Fragment>
      <div className="dark-back"></div>
      <div className="container">{props.children}</div>
    </Fragment>
  );
};

export default PopupComp;
