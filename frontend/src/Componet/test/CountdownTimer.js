import React , { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import '../.././App.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">You can do in</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function Countdown() {
    const [key, setKey] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const handleStartClick = (event) => {
        setKey(prevKey => prevKey + 1);
        setIsPlay(true);
    };
    const handleSubmitClick = (event) => {
        setIsPlay(false);
    };

  return (
    <div className="countdown">
      <button onClick={handleStartClick}> Start </button>
      <button onClick={handleSubmitClick}> Submit </button>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlay}
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
     
    </div>
  );
}
export default Countdown

