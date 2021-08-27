// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {score, playAgainGame, isWon} = props

  const onClickPlayAgain = () => {
    playAgainGame()
  }

  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const text = isWon ? 'Best Score' : 'Score'

  return (
    <div className="game-data">
      <div className="result-container">
        <h1 className="head">{gameStatus}</h1>
        <p className="score-text">{text}</p>
        <p className="score">{score}/12</p>
        <button className="button" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt="resultImage" className="img" />
      </div>
    </div>
  )
}

export default WinOrLossCard
