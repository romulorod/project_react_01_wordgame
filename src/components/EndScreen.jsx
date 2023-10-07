import React from 'react';
import './EndScreen.css';

import gatinho100 from '../assets/gatinho_100.jpg';
import gatinho200 from '../assets/gatinho_200.jpg';
import gatinho300 from '../assets/gatinho_300.jpg';
import gatinho400 from '../assets/gatinho_400.jpg';
import gatinho500 from '../assets/gatinho_500.jpg';

const EndScreen = ({ backToStart, retry, score }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>
        Sua pontuação foi <span>{score}</span>
      </h2>
      <button onClick={retry}>Finalize o game</button>
      {score <= 100 && <h1>Se esforce mais</h1>}
      {score == 200 && <h1>Continue tentando</h1>}
      {score === 300 && <h1>Você está melhorando, não é mesmo?</h1>}
      {score === 400 && <h1>Você chegou muito longe</h1>}
      {score === 500 && <h1>Jesus, man, você está roubando?</h1>}
      <div className="final_img">
        {score <= 100 && <img src={gatinho100} alt="gatinho" />}
        {score === 200 && <img src={gatinho200} alt="gatinho" />}
        {score === 300 && <img src={gatinho300} alt="gatinho" />}
        {score === 400 && <img src={gatinho400} alt="gatinho" />}
        {score === 500 && <img src={gatinho500} alt="gatinho" />}
      </div>
    </div>
  );
};

export default EndScreen;
