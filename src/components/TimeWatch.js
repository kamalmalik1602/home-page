import React, { useState, useEffect } from "react";

function TimeWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div className="time-watch">
        <div className="timing" 
        style={{
            height:"40px",
            width:"40px",
            border: "1px solid black",
        }}
        >
      <span>{formattedHours}</span>

        </div>
        :
        <div className="timing" 
        style={{
            height:"40px",
            width:"40px",
            border: "1px solid black",
        }}
        >
           
      <span>{formattedMinutes}</span>

        </div>
        <div className="timing" 
        style={{
            height:"40px",
            width:"40px",
           
            backgroundColor:"rgb(198, 218, 190)"
        }}
        >
      <span>{ampm}</span>

        </div>
      <div className="date">
            13/03/2023
        </div>
    </div>
  );
}

export default TimeWatch;
