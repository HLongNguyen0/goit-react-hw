import { useCallback, useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import axios from "axios";
import Gallery from "./Gallery/Gallery";
import ModalWindow from "./ModalWindow/ModalWindow";
import { Button } from "./Hw3.styled";

export default function Hw3() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [errors, setErrors] = useState("");
  const [modalId, setModalId] = useState(-1);

  const baseUrl = "https://pixabay.com/api/";
  const key = "24559894-a9126184585885c934fb0d5f1";

  const onSubmit = (input: string) => {
    setInputValue(input);
    setImages([]);
    setPageNumber(1);
  };

  const onLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  const getImages = useCallback(async () => {
    if (inputValue)
      try {
        const result = await axios.get(
          `${baseUrl}?q=${inputValue}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (pageNumber > 1)
          setImages((prevState: any[]) => [...prevState, ...result.data.hits]);
        else setImages(result.data.hits);
      } catch (error) {
        if (axios.isAxiosError(error)) setErrors(error.message);
        else if (error instanceof Error) setErrors(error.message);
        else setErrors("An unknown error occurred");
      }
  }, [inputValue, pageNumber]);

  useEffect(() => {
    getImages();
  }, [inputValue, pageNumber, getImages]);

  useEffect(() => {
    if (modalId > -1) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modalId]);

  return (
    <>
      <Searchbar onSubmit={onSubmit}></Searchbar>

      {modalId > -1 ? (
        <ModalWindow
          image={images[modalId]}
          setModalId={setModalId}
        ></ModalWindow>
      ) : null}

      {errors ? errors : null}

      {!errors &&
        (images.length ? (
          <Gallery images={images} onImageClick={setModalId}></Gallery>
        ) : (
          "No images found"
        ))}

      {images.length ? (
        <Button
          onClick={() => {
            onLoadMore();
          }}
        >
          Load more
        </Button>
      ) : null}
    </>
  );
}
