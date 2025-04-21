import { Header } from "../Hw2.styled";
import { FilterInput } from "./Filter.styled";
import { Dispatch, SetStateAction } from "react";

export default function Filter({ filter, setFilter }: InitValues) {
  return (
    <>
      <Header>Filter</Header>
      <FilterInput
        type="text"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
    </>
  );
}

interface InitValues {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}
