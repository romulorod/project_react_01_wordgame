import style from "./EndScreen.css"

const EndScreen = ({backToStart,retry,score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Sua pontuação foi <span>{score}</span></h2>
      <button onClick={retry}>Finalize o game</button>
    </div>
  )
}

export default EndScreen