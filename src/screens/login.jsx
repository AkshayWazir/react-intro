import React from "react";
import "./styles.css";
import { Button } from "../components";

const LoginPage = () => {
  function buttonClicked() {
    alert("Clicked Button from Login");
  }

  return (
    <div className="loginpage-main-container">
      <div className="loginpage-cc">
        <p>LOGO</p>
        <p>Login with your Credentails</p>
        <Button action={buttonClicked} title="Login" />
        <Button action={() => alert("Signup Clicked")} title="Signup" />
        <Button action={() => alert("Signup Register")} title="Register" />
        <Button action={() => alert("Signup Forget")} title="Forget" />
      </div>
    </div>
  );
};

export default LoginPage;
