// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  const scoreContainerClass = score === 12 ? 'no-score' : 'score-container'

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="www.google.com">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="logo"
          />
        </a>
        <h1 className="text">Emoji Game</h1>
      </div>
      <div className={scoreContainerClass}>
        <p className="text">Score: {score}</p>
        <p className="text">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
