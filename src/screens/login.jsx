import React, { useState } from "react";
import "./styles.css";
import { Button, InputField } from "../components";

const LoginPage = () => {
  const [login, setLogin] = useState();

  function buttonClicked() {
    alert("Clicked Button from Login");
  }

  return (
    <div className="loginpage-main-container">
      <div className="loginpage-cc">
        <p>LOGO</p>
        <p>Login with your Credentails</p>
        <p>{login}</p>
        <InputField value={login} fetchValue={(val) => setLogin(val)} />
        <Button action={buttonClicked} title="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
