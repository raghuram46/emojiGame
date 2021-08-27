/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojisIdList: [], isGameOver: false}

  changeEmojis = id => {
    const {score, clickedEmojisIdList} = this.state

    if (clickedEmojisIdList.includes(id)) {
      this.setState({topScore: score, isGameOver: true})
    } else {
      this.setState(prevState => ({
        clickedEmojisIdList: [...prevState.clickedEmojisIdList, id],
        score: prevState.score + 1,
        isGameOver: false,
      }))
    }
  }

  playAgainGame = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({
        score: 0,
        topScore: score,
        clickedEmojisIdList: [],
      })
    } else {
      this.setState({score: 0, clickedEmojisIdList: [], isGameOver: false})
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, clickedEmojisIdList, isGameOver} = this.state
    const {emojisList} = this.props

    const isWon = emojisList.length === clickedEmojisIdList.length

    const shuffledEmojisList = this.getShuffledEmojisList()

    const emojisContainerClass =
      isWon || isGameOver ? 'cards-container-inactive' : 'cards-container'
    const wonOrLoseClass =
      isWon || isGameOver ? 'result-card-active' : 'result-card'

    return (
      <div>
        <div className="header-section">
          <NavBar score={score} topScore={topScore} />
        </div>
        <div className="bottom-section">
          <ul className={emojisContainerClass}>
            {shuffledEmojisList.map(each => (
              <EmojiCard
                key={each.id}
                emojiDetails={each}
                changeEmojis={this.changeEmojis}
              />
            ))}
          </ul>
          <div className={wonOrLoseClass}>
            <WinOrLoseCard
              score={score}
              playAgainGame={this.playAgainGame}
              isWon={isWon}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
