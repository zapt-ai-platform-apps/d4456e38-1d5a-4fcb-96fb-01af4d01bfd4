import React from 'react';

const InitialScreen = ({ onStartGame, onExit }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">Speed Clicker Challenge</h1>
      
      <p className="text-xl mb-8">
        Test your clicking speed! Click 100 times as fast as you can and discover which animal matches your speed.
      </p>
      
      <div className="flex gap-4">
        <button
          onClick={onStartGame}
          className="px-8 py-4 text-xl font-semibold bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Click
        </button>
        
        <button
          onClick={onExit}
          className="px-8 py-4 text-xl font-semibold bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-colors cursor-pointer"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default InitialScreen;