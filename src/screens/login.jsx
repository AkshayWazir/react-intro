import React from "react";
import "./styles.css";
import { InputField } from "../components";

const LoginPage = () => {
  return (
    <div className="loginpage-main-container">
      <div className="loginpage-cc">
        <p>LOGO</p>
        <p>Login with your Credentails</p>
        <InputField />
      </div>
    </div>
  );
};

export default LoginPage;
