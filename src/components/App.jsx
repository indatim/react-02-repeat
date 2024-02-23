import { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prev => ({
      good: prev.good + 1,
    }));

  handleClickNeutral = () =>
    this.setState(prev => ({
      neutral: prev.neutral + 1,
    }));

  handleClickBad = () =>
    this.setState(prev => ({
      bad: prev.bad + 1,
    }));
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
  let totalFeedback = this.countTotalFeedback()
  const { good } = this.state;
  return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  }

  render() {

    const { good, neutral, bad } = this.state
    const totalFeedbackCount = this.countTotalFeedback()
    const positiveFeedback = this.countPositiveFeedbackPercentage()


    return (
      <div>
        <p>Please leave fedback</p>
        <button className="good" onClick={this.handleClickGood}>
          Good
        </button>
        <button className="neutral" onClick={this.handleClickNeutral}>
          Neutral
        </button>
        <button className="bad" onClick={this.handleClickBad}>
          Bad
        </button>
        <p>Statistic:</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedbackCount}</p>
        <p>Positive feedback: {positiveFeedback}%</p>
      </div>
    );
}
}

export default App
