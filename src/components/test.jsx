import React, { useState } from "react";
import "./styles.css";

const InternalTest = (props) => {
  const { data, remove } = props;
  const [back, setBack] = useState("");
  return (
    <div className="test-card-cont" onClick={() => (back.length > 0 ? setBack("") : setBack("green"))}>
      <div className="test-card-img-cont">
        <img src={data.picture} className="test-card-img" />
      </div>
      <div>
        <p>{data.name}</p>
        <p>{data.design}</p>
      </div>
      <div>
        <div className="button" onClick={() => alert(data.name)}>
          Show Profile
        </div>
        <div className="button" onClick={() => remove(data.id)}>
          Remove Item
        </div>
      </div>
    </div>
  );
};

export default InternalTest;
