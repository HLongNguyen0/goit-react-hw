import { Backdrop, Modal } from "./ModalWindow.styled";

export default function ModalWindow({ image, setModalId }: InitValues) {
  return (
    <Backdrop
      onClick={() => {
        setModalId(-1);
      }}
    >
      <Modal>
        <img src={image.largeImageURL} alt={image.tags} />
      </Modal>
    </Backdrop>
  );
}

interface InitValues {
  image: any;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
}
