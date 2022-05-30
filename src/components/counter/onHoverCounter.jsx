import React from "react";
import "../styles.css";
import HocCounter from "./counter";

class OnHoverCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment } = this.props;
    return (
      <div className="counter" onMouseOver={increment}>
        {count}
      </div>
    );
  }
}

export default HocCounter(OnHoverCounter);
