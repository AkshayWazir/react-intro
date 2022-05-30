import React from "react";
import "../styles.css";
import HocCounter from "./counter";

class OnClickCount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment } = this.props;
    return (
      <div className="counter" onClick={increment}>
        {count}
      </div>
    );
  }
}

export default HocCounter(OnClickCount);
