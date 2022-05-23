import React, { useState } from "react";
import "./styles.css";
import InternalTest from "../components/test";
import ImgProfile from "../assets/cap.png";

export default function TestComponent(props) {
  const [userData, setUserData] = useState([
    { id: 1, name: "Akshay", design: "Develoepr", picture: ImgProfile },
    { id: 2, name: "Lakshay", design: "Designer", picture: ImgProfile },
    { id: 3, name: "Rohan", design: "Manager", picture: ImgProfile },
    { id: 4, name: "Amit", design: "Lead", picture: ImgProfile },
  ]);
  const [newEntry, setNewEntry] = useState({ name: "", desig: "" });

  function removeItem(id) {
    setUserData(userData.filter((item) => item.id != id));
  }

  function changeName(event) {
    setNewEntry({ ...newEntry, name: event.target.value });
  }

  function changeDesig(event) {
    setNewEntry({ ...newEntry, desig: event.target.value });
  }

  return (
    <div className="test-main-cont">
      <div>
        <label>Name</label>
        <input type="text" onChange={changeName} />
        <label>Designation</label>
        <input type="text" onChange={changeDesig} />
        <div
          className="button"
          onClick={() => setUserData([...userData, { id: userData.length + 1, name: newEntry.name, design: newEntry.desig, picture: ImgProfile }])}
        >
          submit
        </div>
      </div>
      {userData.map((item) => (
        <InternalTest data={item} remove={removeItem} />
      ))}
    </div>
  );
}
