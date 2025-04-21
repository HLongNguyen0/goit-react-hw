import { nanoid } from "nanoid";
import { Button, List, ListElem } from "./Contacts.styled";
import { Dispatch, SetStateAction } from "react";

export default function Contacts({
  contacts,
  setContacts,
  filter,
}: InitValues) {
  const handleDelete = (contact: { name: string; number: string }) => {
    const newContacts = [...contacts];
    const index = contacts.indexOf(contact);
    if (index !== -1) newContacts.splice(index, 1);
    localStorage.setItem("react-hw-contacts", JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  return (
    <List>
      {contacts
        .filter((elem) =>
          elem.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((elem) => (
          <ListElem key={nanoid()}>
            {elem.name} : {elem.number}
            <Button onClick={() => handleDelete(elem)}>Delete</Button>
          </ListElem>
        ))}
    </List>
  );
}

interface InitValues {
  contacts: { name: string; number: string }[];
  setContacts: Dispatch<SetStateAction<{ name: string; number: string }[]>>;
  filter: string;
}
