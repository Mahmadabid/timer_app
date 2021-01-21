import React from 'react';
import './TimerButton.css';

type button = {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

const TimerButton: React.FC<button> = ({ start, stop, reset }) => (
  <div className="button">
    <div className="button-container start" onClick={start}>
      <p className="button-value">start</p>
    </div>
    <div className="button-container stop" onClick={stop}>
      <p className="button-value">stop</p>
    </div>
    <div className="button-container reset" onClick={reset}>
      <p className="button-value">reset</p>
    </div>
  </div>
  );

export default TimerButton;