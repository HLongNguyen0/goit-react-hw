import { useOutletContext } from "react-router-dom";

export default function MovieAdditionalInfo({ infoType }: InitValues) {
  const context = useOutletContext<any>();

  return (
    <>
      <h2>{`${context?.data.title}`}</h2>

      {infoType === "cast" && "Some cast data"}
      {infoType === "reviews" && "Some reviews data"}
    </>
  );
}

interface InitValues {
  infoType: "cast" | "reviews";
}
