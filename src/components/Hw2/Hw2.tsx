import { useEffect, useState } from "react";
import { SectionContainer } from "./Hw2.styled";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

export default function Hw2() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const [phonebook, setPhonebook] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState<{ name: string; number: string }[]>(
    []
  );

  useEffect(() => {
    const localstorageContacts = localStorage.getItem("react-hw-contacts");
    if (localstorageContacts) setContacts(JSON.parse(localstorageContacts));
  }, []);

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

  const handlePhonebookSubmit = (contact: { name: string; number: string }) => {
    localStorage.setItem(
      "react-hw-contacts",
      JSON.stringify([...contacts, contact])
    );
    setContacts([...contacts, contact]);
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
          setContacts={handlePhonebookSubmit}
        ></Phonebook>
        <Filter filter={filter} setFilter={setFilter}></Filter>
        <Contacts
          contacts={contacts}
          setContacts={setContacts}
          filter={filter}
        ></Contacts>
      </SectionContainer>
    </>
  );
}
