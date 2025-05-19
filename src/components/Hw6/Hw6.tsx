import { useState } from "react";
import { SectionContainer } from "./Hw6.styled";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import { useSelector } from "react-redux";

export default function Hw6() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const [phonebook, setPhonebook] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  const contacts = useSelector((state: any) => state.contacts);

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
        <Feedback
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></Feedback>
        <Statistics
          options={options}
          total={countTotalFeedback}
          positive={countPositiveFeedbackPercentage}
        ></Statistics>
      </SectionContainer>

      <SectionContainer>
        <Phonebook
          phonebook={phonebook}
          setPhonebook={setPhonebook}
        ></Phonebook>
        <Filter filter={filter} setFilter={setFilter}></Filter>
        <Contacts contacts={contacts} filter={filter}></Contacts>
      </SectionContainer>
    </>
  );
}
