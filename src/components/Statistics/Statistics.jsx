const Statistics = ({ good, neutral, bad, total, positive }) => (
  <>
    {total ? (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positive}%</li>
      </ul>
    ) : (
      <p>No feedback given</p>
    )}
  </>
);

export default Statistics