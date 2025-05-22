import { useEffect, useState } from "react";
import Phonebook from "./Phonebook/Phonebook";
import { useDispatch } from "react-redux";
import { getAllContacts } from "./redux/service";
import { Contacts } from "./Contacts/Contacts";
import { AppDispatch } from "./redux/model";

export default function Hw7() {
  const [phonebook, setPhonebook] = useState({ name: "", number: "" });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  return (
    <>
      <Phonebook phonebook={phonebook} setPhonebook={setPhonebook}></Phonebook>
      <Contacts></Contacts>
    </>
  );
}
