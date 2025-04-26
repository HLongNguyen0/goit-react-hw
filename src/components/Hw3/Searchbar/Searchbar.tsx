import {
  Button,
  ButtonText,
  Form,
  Input,
  SearchbarContainer,
} from "./Searchbar.styled";
import { useState } from "react";

export default function Searchbar({ onSubmit }: InitValues) {
  const [inputValue, setInputValue] = useState("");

  return (
    <SearchbarContainer>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(inputValue);
        }}
      >
        <Button type="submit">
          <ButtonText>Search</ButtonText>
        </Button>
        <Input
          value={inputValue}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        ></Input>
      </Form>
    </SearchbarContainer>
  );
}

interface InitValues {
  //   onSubmit: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: any;
}
