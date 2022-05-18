import "./App.css";
import React from "react";
import { Dashboard } from "./screens";
import axios from "axios";

export default function App() {
  axios.get("http://localhost:4000/url/n").then(function (response) {
    console.log("from App.js :", response.data);
  });

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

// * prop & functions flow is confusing
// * JS
// * Logic building
// lifecycle
