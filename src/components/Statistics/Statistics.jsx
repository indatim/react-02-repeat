import Notification from "components/Notification/Notification";

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
      <Notification message="There is no feedback" />
    )}
  </>
);

export default Statistics