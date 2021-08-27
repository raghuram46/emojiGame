// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, changeEmojis} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    changeEmojis(id)
  }

  return (
    <li className="card">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emoji"
        onClick={onClickEmoji}
      />
    </li>
  )
}

export default EmojiCard
