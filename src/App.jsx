{
  /*React Importados */
}
import React, { useState, useEffect, useCallback } from 'react';

/*CSS IMPORTADOS */
import './App.css';

/*Banco de dados */
import './data/Word';

/*COMPONENTES */
import { StartScreen } from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { wordsList } from './data/Word';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];
const numberScore = 5;

function App() {
  const [gameStage, setGameStage] = useState('start');
  const [word] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(numberScore);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(word);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const randomWord =
      word[category][Math.floor(Math.random() * word[category].length)];

    return { category, randomWord };
  }, [word]);

  const startGame = useCallback(() => {
    const { category, randomWord } = pickWordAndCategory();
    //console.log(category,randomWord)
    clearLettersStates();

    {
      /*Criando uma array de letras */
    }
    let letterArray = randomWord.split('');

    letterArray = letterArray.map((letra) => letra.toLowerCase());

    setPickedCategory(category);
    setPickedWord(randomWord);
    setLetters(letterArray);
    setGameStage(stages[1].name);
    setScore(0);
  }, [pickWordAndCategory]);
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((atualGuesses) => atualGuesses - 1);
    }
  };
  useEffect(() => {
    if (guesses <= 0) {
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Checar a condicção de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    //pontuação ++
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));
      const { category, randomWord } = pickWordAndCategory();
      //console.log(category,randomWord)
      clearLettersStates();

      {
        /*Criando uma array de letras */
      }
      let letterArray = randomWord.split('');

      letterArray = letterArray.map((letra) => letra.toLowerCase());

      setPickedCategory(category);
      setPickedWord(randomWord);
      setLetters(letterArray);
    }
  }, [guessedLetters, letters, startGame]);
  const backToStart = () => {
    setGameStage(stages[0].name);
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };
  const retry = () => {
    setScore(0);
    setGuesses(5);
    setGameStage(stages[0].name);
  };
  const clearInitial = () => {
    setScore(0);
    setGuesses(5);
  };

  return (
    <div className="app">
      {gameStage === 'start' && (
        <StartScreen startGame={startGame} setGameStage={setGameStage} />
      )}
      {gameStage === 'game' && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && (
        <EndScreen backToStart={backToStart} retry={retry} score={score} />
      )}
    </div>
  );
}

export default App;
