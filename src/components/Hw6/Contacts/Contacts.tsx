import { nanoid } from "nanoid";
import { Button, List, ListElem } from "./Contacts.styled";
import { ContactInterface } from "../redux/model";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

export default function Contacts({ contacts, filter }: InitValues) {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts
        .filter((elem) =>
          elem.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((elem) => (
          <ListElem key={nanoid()}>
            {elem.name} : {elem.number}
            <Button onClick={() => dispatch(deleteContact({ id: elem.id }))}>
              Delete
            </Button>
          </ListElem>
        ))}
    </List>
  );
}

interface InitValues {
  contacts: ContactInterface[];
  filter: string;
}
