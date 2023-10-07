import "./EndScreen.css"


const EndScreen = ({backToStart,retry,score}) => {
 
  
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Sua pontuação foi <span>{score}</span></h2>
      <button onClick={retry}>Finalize o game</button>
      {score<=100 && <h1>Se esforce mais</h1>}
      {score==200 && <h1>Continue tentando</h1>}
      {score===300 && <h1>Você está melhorando, não é mesmo?</h1>}
      {score===400 && <h1>Você chegou muito longe</h1>}
      {score===500 && <h1>Jesus, man, você está roubando?</h1>}
      <div className="final_img">
        {score <= 100 && <img src="src/assets/gatinho_100.jpg" alt="gatinho"/> }
        {score === 200 && <img src="src/assets/gatinho_200.jpg" alt="gatinho" />}
        {score === 300 && <img src="src/assets/gatinho_300.jpg" alt="gatinho" /> }
        {score === 400 && <img src="src/assets/gatinho_400.jpg" alt="gatinho" /> }
        {score === 500 && <img src="src/assets/gatinho_500.jpg" alt="gatinho" /> }

      </div>
      
    </div>
  )
}

export default EndScreen