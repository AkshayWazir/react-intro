import "./App.css";
import React, { useEffect, useState } from "react";
import { NewLogin } from "./screens";
import axios from "axios";

export default function App() {
  useEffect(() => {
    axios.get("http://localhost:4000/url/n").then(function (response) {
      console.log("from App.js :", response.data);
    });
  }, []);

  return (
    <div className="App">
      <NewLogin />
    </div>
  );
}
