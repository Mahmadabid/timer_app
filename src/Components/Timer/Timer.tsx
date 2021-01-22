import React, { useState } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

const Timer = () => {

    let [milliseconds, setmilliseconds] = useState(0);
    let [seconds, setseconds] = useState(0);
    let [minutes, setminutes] = useState(0);
    let [hours, sethours] = useState(0);
    const [isOn, setOn] = useState<any>();
    const [isstart, setstart] = useState(false);
    
    const startTimer = () => {
        if (isstart === false) {
            setOn(setInterval(run,100));
        }
        setstart(true);
    }

    const stopTimer = () => {
        clearInterval(isOn);
        setstart(false);
    }

    const resetTimer = () => {
        clearInterval(isOn);
        setmilliseconds(0);
        setminutes(0);
        setseconds(0);
        sethours(0);
        setstart(false);
    }

    function run() {        
        if (milliseconds === 10) {
            setseconds(seconds+=1);
            milliseconds = 0;
        }
        if (seconds === 60) {
            setminutes(minutes+=1);
            seconds = 0;
        }
        if (minutes === 60) {
            sethours(hours+=1);
            minutes = 0;
        }
        setmilliseconds(milliseconds+=1);
    }

    return (
        <div className="timer-container">
            <h1 className="time-display">Timer App</h1>
            <div className="time-display time">
                {hours!==0?hours+':':null}{minutes<10?'0'+minutes:minutes}:{seconds>=10?seconds:'0'+seconds}.{('0' + milliseconds).slice(-1)}
            </div>
            <div className="timer-button-container">
                <TimerButton
                    start={startTimer}
                    stop={stopTimer}
                    reset={resetTimer}
                />
            </div>
        </div>
    );
};

export default Timer;