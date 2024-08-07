import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          return 15 * 60; // Reset to 15 minutes
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { minutes, secs: secs < 10 ? `0${secs}` : secs };
  };

  const { minutes, secs } = formatTime(timeLeft);

  return (
    <div className="max-md:mt-6 flex justify-center items-center space-x-4">
      <div className="text-center">
        <div className="bg-white text-[#EE4B85] font-semibold py-3 px-6 rounded text-xl md:ml-6">
          {minutes}
        </div>
        <div className="text-lg text-white font-medium mt-2 ">Minutes</div>
      </div>
      <div className="text-center">
        <div className="bg-white text-[#EE4B85] font-semibold py-3 px-6 rounded text-xl md:ml-6">
          {secs}
        </div>
        <div className="text-lg  text-white font-medium mt-2">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;
