import React from "react";

const HocInput = (OrignalCompo) => {
  return class OrignalComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: false,
      };
    }
    validationHandler = (val) => this.setState({ error: !this.props.validation(val) });
    render() {
      return <OrignalCompo error={this.state.error} validationFunction={this.validationHandler} />;
    }
  };
};

export default HocInput;
