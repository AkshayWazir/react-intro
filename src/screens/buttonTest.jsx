import React from "react";
import "./styles.css";
import { GenButton } from "../components";

const ButtonTest = () => {
  return (
    <div>
      <GenButton type={0} title="Create New User" onClickAction={() => alert("Clicked")} extStyles={{ margin: "2vh" }} />
      <GenButton type={1} title="Create New User" onClickAction={() => alert("Clicked")} extStyles={{ margin: "2vh" }} />
      <GenButton type={2} title="Create New User" onClickAction={() => alert("Clicked")} extStyles={{ margin: "2vh" }} />
      <GenButton type={3} title="Create New User" onClickAction={() => alert("Clicked")} extStyles={{ margin: "2vh" }} />
    </div>
  );
};

export default ButtonTest;
