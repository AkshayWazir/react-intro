import React from "react";
import "./styles.css";
import AppLogo from "../assets/logo.svg";

const HeaderComp = (props) => {
  const { total = 0 } = props;
  const tabMenu = [new TopItem("Products", true), new TopItem("Features", false), new TopItem("Pricing", true), new TopItem("About US", false)];
  const tabMenu1 = [
    { title: "Products", selected: true },
    { title: "Features", selected: false },
    { title: "Pricing", selected: false },
    { title: "About Us", selected: true },
  ];
  console.log("====================================");
  console.log(Object.values(total));
  console.log("====================================");

  return (
    <div className="top-navigation">
      <img src={AppLogo} className="applogo" />
      {tabMenu.map((item) => (
        <p className={item.selected ? "active-tab" : "inactive-tab"}>{item.title}</p>
      ))}
      <p>{Object.values(total).reduce((a, b) => parseInt(a) + parseInt(b), 0)}</p>
    </div>
  );
};

class TopItem {
  constructor(title, selected) {
    this.title = title;
    this.selected = selected;
  }
}

export default HeaderComp;
