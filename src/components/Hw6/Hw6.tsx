import { useState } from "react";
import { SectionContainer } from "./Hw6.styled";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import { useSelector } from "react-redux";

export default function Hw6() {
  const [phonebook, setPhonebook] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  const contacts = useSelector((state: any) => state.contacts);

  return (
    <>
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
