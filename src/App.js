import React, { Component } from "react";
import "./App.css";

const RESET_INTERVAL = 60

const formatTime = (time) =>
  `
    ${String(Math.floor(time / 60)).padStart(2, "00")}:
    ${String(time % 60).padStart(2, "0")}
  `
;

const Timer = ({ time }) => {
  const timeRemaining = RESET_INTERVAL - (time % RESET_INTERVAL);

  return (
    <>
      <div className="timerDisplay">
        <span className="timerText">Time Remaning</span>
        <br></br>
        <span className="timerDigits">{formatTime(timeRemaining)}</span>
      </div>
    </>
  );
};

class TimerClass extends Component {
  state = {
    time: 0
  };

  timerId = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1}));
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