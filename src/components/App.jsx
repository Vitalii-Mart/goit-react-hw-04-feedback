import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const options = ['good', 'neutral', 'bad'];

  const calcPercentages = () => {
    const total = totalFeedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const leaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={calcPercentages()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
