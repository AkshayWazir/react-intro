import React from "react";
import "./styles.css";

class NewLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log("Constructor");
  }

  componentDidMount = () => {
    console.log("Component did Mount");
  };

  static getDerivedStateFromProps(props, state) {
    console.log("Get Drived Props called");
    return { counter: props.val };
  }

  shouldComponentUpdate() {
    console.log("Should component update");
    if (this.state.counter % 2 === 0) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Snapshot Update Called");
    return null;
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  increment = () => {
    const { counter } = this.state;
    if (counter < 10) {
      this.setState({ counter: counter + 1 });
    } else if (counter < 50) {
      this.setState({ counter: counter + 5 });
    } else {
      this.setState({ counter: counter + 10 });
    }
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("Render called");
    const { counter } = this.state;
    return (
      <div className="mainContiner">
        <div className="counterContainer">
          <div className="textStyling hyperlink" onClick={this.increment}>
            +
          </div>
          <div className="textStyling">{counter}</div>
          <div className="textStyling hyperlink" onClick={this.decrement}>
            -
          </div>
        </div>
      </div>
    );
  }
}

export default NewLogin;
