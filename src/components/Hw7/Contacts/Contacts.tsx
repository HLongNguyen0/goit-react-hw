import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ContactInterface, StateInterface } from "../redux/model";
import { Button, List, ListElem } from "./Contacts.styled";
import { deleteContact } from "../redux/service";

export function Contacts() {
  const dispatch = useDispatch<AppDispatch>();

  const contacts = useSelector(
    (state: { contacts: StateInterface }) => state.contacts.list.items
  );

  return (
    <List>
      {contacts?.map((elem: ContactInterface) => (
        <ListElem key={elem.id}>
          {elem.name} : {elem.phone}
          <Button
            onClick={() => {
              dispatch(deleteContact(elem.id));
            }}
          >
            Delete
          </Button>
        </ListElem>
      ))}
    </List>
  );
}
