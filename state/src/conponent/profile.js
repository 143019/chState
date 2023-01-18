import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }

  componentDidMount() {
   setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
}

export default Timer;
