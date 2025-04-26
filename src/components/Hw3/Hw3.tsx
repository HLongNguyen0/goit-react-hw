import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import axios from "axios";

export default function Hw3() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [errors, setErrors] = useState("");

  const onSubmit = (input: string) => {
    setInputValue(input);
    setImages([]);
    setPageNumber(1);

    getImages();
  };

  const baseUrl =
    "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12";
  const key = "24559894-a9126184585885c934fb0d5f1";

  const getImages = async () => {
    try {
      const result = await axios.get(
        `${baseUrl}?q=${inputValue}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(result.data.hits);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors(error.message);
      } else if (error instanceof Error) {
        setErrors(error.message);
      } else {
        setErrors("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit}></Searchbar>
    </>
  );
}
