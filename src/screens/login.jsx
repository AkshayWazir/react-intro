import React, { useState, useEffect } from "react";
import "./styles.css";
import { InputField } from "../components";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { productId } = useParams();
  const [login, setLogin] = useState({ userName: "", email: "", password: "", confirmPass: "", policyAggre: false });

  let navigate = useNavigate();

  useEffect(() => {
    console.log("Got Product ID ", productId);
  }, []);

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
        {/* <InputField
          value={login.policyAggre}
          fetchValue={(val) => setLogin({ ...login, policyAggre: val })}
          hint="Agree to Our terms and Conditions"
          type="checkbox"
        /> */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={login.policyAggre} onChange={(val) => setLogin({ ...login, policyAggre: val.target.checked })} />}
            label="Agree to Our terms and Conditions"
          />
        </FormGroup>
        <Button onClick={buttonClicked} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
