import React from 'react';
import './StartScreen.css';

export const StartScreen = ({ startGame }) => {
  return (
    <div className="principal_screen">
      <h1>Word Game</h1>
      <p>Clique abaixo para começar</p>
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
};
