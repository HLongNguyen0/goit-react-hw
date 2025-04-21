import { Dispatch, SetStateAction } from "react";
import { Header } from "../Hw2.styled";
import { Button, Form, Input } from "./Phonebook.styled";

export default function Phonebook({
  phonebook,
  setPhonebook,
  setContacts,
}: InitValues) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhonebook({ ...phonebook, [e.target?.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const number = formData.get("number") as string;
    setContacts({ name, number });
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
  setContacts: (contact: { name: string; number: string }) => void;
}
