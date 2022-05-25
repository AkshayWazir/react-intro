import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const ShoppingCart = () => {
  const [content, setContent] = useState({ groc: [], sport: [] });
  const inputEle1 = useRef();
  const inputEle2 = useRef();
  const inputEle3 = useRef();
  const inputEle4 = useRef();

  function checkEmptyFields() {
    if (inputEle1.current.value === "") {
      inputEle1.current.focus();
    } else if (inputEle2.current.value === "") {
      inputEle2.current.focus();
    } else if (inputEle3.current.value === "") {
      inputEle3.current.focus();
    } else if (inputEle4.current.value === "") {
      inputEle4.current.focus();
    }
  }

  return (
    <div>
      <input type="text" ref={inputEle1} />
      <input type="text" ref={inputEle2} />
      <input type="text" ref={inputEle3} />
      <input type="text" ref={inputEle4} />
      <div onClick={() => checkEmptyFields()}>focus on input</div>\
    </div>
  );
};

const CommonList = (props) => {
  const { cost, title, addAction } = props;
  return (
    <div className="common-cont">
      <p className="title">{title}</p>
      <p className="cost">{cost}</p>
      <div>Add</div>
    </div>
  );
};

export default ShoppingCart;
