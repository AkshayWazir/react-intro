import "./App.css";
import Header from "./components/header.jsx";
import BodyCard from "./components/subCard";
import React, { useState } from "react";

function App() {
  const [content, setContent] = useState({});

  return (
    <div className="App">
      <Header total={content} />
      <BodyCard updateGlobalState={(val) => setContent(val)} />
    </div>
  );
}

export default App;
