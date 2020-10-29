import React, { Component } from "react";
import "./App.css";

const resetInterval = 60;

const Timer = ({ time }) => {
  const timeRemaining = resetInterval - (time % resetInterval);

  return (
    <>
      <div className="timerDisplay">
        <span className="timerText">Time Remaning</span>
        <br></br>
        <span className="timerNumbers">{(timeRemaining)}</span>
      </div>
    </>
  );
};

class TimerClass extends Component {
  state = {
    time: 0
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <Timer time={this.state.time} />;
  }
}

export default function App() {
  return (
    <div className="App">
      <TimerClass />
    </div>
  );
}