import React, { useState } from "react";

const HocCounter = (OrignalComponent) => {
  return class OrignalComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      const { count } = this.state;
      return <OrignalComponent count={count} increment={this.incrementCount} />;
    }
  };
};

export default HocCounter;
