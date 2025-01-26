import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  text-align: center;
  color: #fff;
`;

const TimerTime = styled.p`
  font-size: 3.5rem;
  margin: 0;
`;

const TimerLabel = styled.p`
  font-size: 1.5rem;
`;

const Timer = ({ sound }) => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSec((prevSec) => prevSec + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(sec / 60).toString().padStart(2, "0");
  const seconds = (sec % 60).toString().padStart(2, "0");

  return (
    <TimerContainer>
      <TimerLabel>{sound} 재생 시간</TimerLabel>
      <TimerTime>
        {minutes}:{seconds}
      </TimerTime>
    </TimerContainer>
  );
};

export default Timer;

