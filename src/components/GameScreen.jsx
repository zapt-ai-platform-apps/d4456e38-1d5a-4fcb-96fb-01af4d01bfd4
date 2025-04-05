import React, { useState, useEffect, useCallback } from 'react';

const GameScreen = ({ onGameComplete }) => {
  const [clickCount, setClickCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const targetClicks = 100;

  // Start the timer when component mounts
  useEffect(() => {
    setStartTime(Date.now());
    
    // Set up timer to update elapsed time
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 100);
    
    return () => clearInterval(timer);
  }, [startTime]);

  const handleClick = useCallback(() => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    if (newClickCount >= targetClicks) {
      const finalTime = Math.floor((Date.now() - startTime) / 1000);
      onGameComplete(finalTime);
    }
  }, [clickCount, startTime, onGameComplete]);

  // Calculate remaining clicks
  const remainingClicks = targetClicks - clickCount;

  return (
    <div 
      className="flex flex-col items-center justify-center h-full w-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="fixed top-4 left-0 right-0 flex justify-center items-center gap-8 text-xl">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <span className="font-bold text-indigo-700">Time:</span> {timeElapsed} seconds
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <span className="font-bold text-indigo-700">Clicks Remaining:</span> {remainingClicks}
        </div>
      </div>
      
      <div className="text-center p-8 bg-indigo-100 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Click Anywhere!</h2>
        <p className="text-xl">Click {remainingClicks} more times to complete the challenge</p>
      </div>
    </div>
  );
};

export default GameScreen;