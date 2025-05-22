import { Dispatch, SetStateAction } from "react";
import { Header } from "../Hw7.styled";
import { Button, Form, Input } from "./Phonebook.styled";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/service";
import { AppDispatch } from "../redux/model";

export default function Phonebook({ phonebook, setPhonebook }: InitValues) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhonebook({ ...phonebook, [e.target?.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("number") as string;

    dispatch(addContact({ name, phone }));
    setPhonebook({ name: "", number: "" });
  };

  return (
    <>
      <Header>Phonebook</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={phonebook.name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          type="tel"
          name="number"
          value={phonebook.number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button>Add</Button>
      </Form>
    </>
  );
}

interface InitValues {
  phonebook: {
    name: string;
    number: string;
  };
  setPhonebook: Dispatch<SetStateAction<{ name: string; number: string }>>;
}
