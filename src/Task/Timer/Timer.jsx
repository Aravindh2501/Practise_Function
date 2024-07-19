import React, { useEffect, useState } from 'react';
import './Timer.scss';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [inputTime, setInputTime] = useState('');

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => isCountingDown ? prevTime - 1 : prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, isCountingDown]);

    const handleStart = () => {
        setTime(isCountingDown ? parseInt(inputTime, 10) : 0);
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setInputTime('');
    };

    const handleInputChange = (e) => {
        setInputTime(e.target.value);
    };

    const toggleCountingDirection = () => {
        setIsCountingDown(!isCountingDown);
    };

    return (
        <div className="timer">
            <h1 style={{ margin: "1rem" }}>Timer</h1>

            <h1>{time}s</h1>
            <div className="controls">
                <input
                    type="number"
                    value={inputTime}
                    onChange={handleInputChange}
                    placeholder="Enter time in seconds"
                />
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={toggleCountingDirection}>
                    {isCountingDown ? 'Count Up' : 'Count Down'}
                </button>
            </div>
        </div>
    );
};

export default Timer;
