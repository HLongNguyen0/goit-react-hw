import { nanoid } from "nanoid";
import { GalleryImage, GalleryItem, GalleryList } from "./Gallery.styled";

export default function Gallery({ images, onImageClick }: InitValues) {
  return (
    <GalleryList>
      {images.map((elem, index) => (
        <GalleryItem
          key={nanoid()}
          onClick={() => {
            onImageClick(index);
          }}
        >
          <GalleryImage src={elem.webformatURL} alt={elem.tags} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
}

interface InitValues {
  images: any[];
  onImageClick: React.Dispatch<React.SetStateAction<number>>;
}
