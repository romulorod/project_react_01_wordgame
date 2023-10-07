import { useState,useRef } from 'react'
import style from ".//GameScreen.css"

const GameScreen = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score

}) => {
  const [letter,setLetter] = useState()

  const letterInputRef =  useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter)
    setLetter('')

    letterInputRef.current.focus()
    
  }


  return (
    
    <div className="game">
      
      <p className="points">
        <span>score:{score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
      {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              <p>{letter}</p>
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
        
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar a letra</p>
        <form  onSubmit={handleSubmit}>
          <input type="text" name='letter' maxLength="1" required 
          pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
          onChange={(e) =>setLetter(e.target.value)}
          ref ={letterInputRef}
          value={letter}/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras utilizadas:</p>
        {wrongLetters.map((letter,i) =>(
          <span key={i}>{letter},</span>

        ))}
      </div>
      
    
    </div>
    
  )
}

export default GameScreen