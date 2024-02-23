const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        type="button"
        data-feedback={option}
        onClick={() => onLeaveFeedback(option)}
        key={option}
        >{option}</button>
    ))}
  </>
);

export default FeedbackOptions