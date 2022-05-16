import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button, InputField } from "../components";

const LoginPage = () => {
  const [login, setLogin] = useState({ userName: "", email: "", password: "", confirmPass: "", policyAggre: false });

  useEffect(() => {
    console.log("Login Component Loaded");
  }, [login]);

  function buttonClicked() {
    alert(login);
  }

  return (
    <div className="loginpage-main-container">
      <div className="loginpage-cc">
        <p>LOGO</p>
        <p>Login with your Credentails</p>
        <InputField value={login.userName} fetchValue={(val) => setLogin({ ...login, userName: val })} hint="UserName" />
        <InputField value={login.email} fetchValue={(val) => setLogin({ ...login, email: val })} hint="Email" />
        <InputField value={login.password} fetchValue={(val) => setLogin({ ...login, password: val })} hint="Password" />
        <InputField value={login.confirmPass} fetchValue={(val) => setLogin({ ...login, confirmPass: val })} hint="Confirm Password" />
        <InputField
          value={login.policyAggre}
          fetchValue={(val) => setLogin({ ...login, policyAggre: val })}
          hint="Agree to Our terms and Conditions"
          type="checkbox"
        />
        <Button action={buttonClicked} title="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
