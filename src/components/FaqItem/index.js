import './index.css'

const FaqItem = props => {
  const {FaqDetails, setActiveId, isActive} = props
  const {id, questionText, answerText} = FaqDetails

  const clickButton = () => {
    setActiveId(id)
  }

  return (
    <li className="question-answer-card">
      <div className="question-card">
        <h1 className="question">{questionText}</h1>
        <button className="button" onClick={clickButton}>
          <img
            className="icon"
            src={
              isActive
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isActive ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {isActive && <hr className="horizontal-line" />}
      {isActive && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
