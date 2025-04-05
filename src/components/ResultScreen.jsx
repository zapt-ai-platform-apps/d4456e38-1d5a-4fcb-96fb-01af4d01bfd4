import React from 'react';

const ResultScreen = ({ completionTime, onRestart }) => {
  let resultMessage = '';
  let animalImage = '';
  
  if (completionTime < 10) {
    resultMessage = "You are as fast as a cheetah!";
    animalImage = "🐆";
  } else if (completionTime < 20) {
    resultMessage = "You are as fast as a horse!";
    animalImage = "🐎";
  } else if (completionTime < 40) {
    resultMessage = "You are as fast as a buffalo!";
    animalImage = "🦬";
  } else {
    resultMessage = "You are as fast as a tortoise!";
    animalImage = "🐢";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="text-8xl mb-4">{animalImage}</div>
      
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Challenge Complete!</h1>
      
      <p className="text-2xl font-semibold mb-4">
        Time: {completionTime} seconds
      </p>
      
      <p className="text-3xl font-bold mb-8 text-indigo-600">
        {resultMessage}
      </p>
      
      <button
        onClick={onRestart}
        className="px-8 py-4 text-xl font-semibold bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;