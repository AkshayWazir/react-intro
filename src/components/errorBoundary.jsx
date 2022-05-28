import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Caught Error : ", error);
  }

  render() {
    if (this.state.hasError) {
      <p>Error Occured</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
