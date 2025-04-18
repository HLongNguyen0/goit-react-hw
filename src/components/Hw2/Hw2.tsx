import { useState } from "react";
import { Header, SectionContainer } from "./Hw2.styled";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

export default function Hw2() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((options.good * 100) / countTotalFeedback());
  };
  const onLeaveFeedback = (key: "good" | "neutral" | "bad") => {
    setOptions({ ...options, [key]: options[key] + 1 });
  };

  return (
    <>
      <SectionContainer>
        <Header>Please leave a feedback</Header>
        <Feedback
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></Feedback>
      </SectionContainer>
      <SectionContainer>
        <Header>Statistics</Header>
        <Statistics
          options={options}
          total={countTotalFeedback}
          positive={countPositiveFeedbackPercentage}
        ></Statistics>
      </SectionContainer>
    </>
  );
}
