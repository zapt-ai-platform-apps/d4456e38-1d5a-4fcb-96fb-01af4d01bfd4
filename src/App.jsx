import React, { useState, useCallback } from 'react';
import InitialScreen from './components/InitialScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

// Game states
const GAME_STATE = {
  INITIAL: 'initial',
  PLAYING: 'playing',
  COMPLETED: 'completed'
};

export default function App() {
  const [gameState, setGameState] = useState(GAME_STATE.INITIAL);
  const [completionTime, setCompletionTime] = useState(0);

  // Handle start game button
  const handleStartGame = useCallback(() => {
    setGameState(GAME_STATE.PLAYING);
  }, []);

  // Handle exit button
  const handleExit = useCallback(() => {
    window.close();
    // Since window.close() might be blocked by browsers,
    // add a fallback message
    alert("The app cannot be closed automatically due to browser restrictions. Please close the tab manually.");
  }, []);

  // Handle game completion
  const handleGameComplete = useCallback((time) => {
    setCompletionTime(time);
    setGameState(GAME_STATE.COMPLETED);
  }, []);

  // Handle restart game
  const handleRestart = useCallback(() => {
    setGameState(GAME_STATE.INITIAL);
    setCompletionTime(0);
  }, []);

  // Render the appropriate screen based on game state
  const renderGameScreen = () => {
    switch (gameState) {
      case GAME_STATE.INITIAL:
        return <InitialScreen onStartGame={handleStartGame} onExit={handleExit} />;
      case GAME_STATE.PLAYING:
        return <GameScreen onGameComplete={handleGameComplete} />;
      case GAME_STATE.COMPLETED:
        return <ResultScreen completionTime={completionTime} onRestart={handleRestart} />;
      default:
        return <InitialScreen onStartGame={handleStartGame} onExit={handleExit} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-4xl min-h-[70vh] flex items-center justify-center bg-white rounded-2xl shadow-xl p-8">
        {renderGameScreen()}
      </div>
      
      <div className="fixed bottom-4 right-4 text-sm text-gray-600">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}