import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const options = ['good', 'neutral', 'bad']

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleClickGood = () =>
  //   this.setState(prev => ({
  //     good: prev.good + 1,
  //   }));

  // handleClickNeutral = () =>
  //   this.setState(prev => ({
  //     neutral: prev.neutral + 1,
  //   }));

  // handleClickBad = () =>
  //   this.setState(prev => ({
  //     bad: prev.bad + 1,
  //   }));
  
  handleFeedback = target => {
    this.setState(prevState => {
    return{[target] : prevState[target] + 1}
  })
}

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
        {/* <p>Please leave fedback</p> */}
        {/* <button className="good" onClick={this.handleFeedback}>
          Good
        </button>
        <button className="neutral" onClick={this.handleFeedback}>
          Neutral
        </button>
        <button className="bad" onClick={this.handleFeedback}>
          Bad
        </button> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positive={positiveFeedback}
          />
        </Section>
      </div>
    );
}
}

export default App
