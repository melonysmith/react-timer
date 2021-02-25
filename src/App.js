import React from "react";
import ReactDOM from 'react-dom'
import "./App.css";

const {useState, useEffect} = React;

const Countdown = () => {
  const [countdownDate] =  useState(new Date(60 * 1000).getTime());
  const [state, setState] = useState({
    minutes: 1,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  },);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date(60 * 1000).getTime();

      const distanceToDate = countdownDate - currentTime;

      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ minutes:minutes, seconds:seconds });
    }
  };

  return (
    <div>
      <h3 className="subtitle">Time Remaining:</h3>
      <div className='countdown-wrapper'>
        <div className='time-section'>
          <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">Minutes</small>
        </div>
        <div className='time-section'>
          <div className='time'>:</div>
        </div>
        <div className='time-section'>
          <div className='time'>{state.seconds || '00'}</div>
          <small className="time-text">Seconds</small>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Countdown />, document.getElementById('root'));

export default Countdown;