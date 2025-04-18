import { Button } from "./Feedback.styled";

export default function Feedback({ options, onLeaveFeedback }: InitValues) {
  return (
    <>
      {Object.keys(options).map((elem) => (
        <Button
          key={elem}
          onClick={() => onLeaveFeedback(elem as "good" | "neutral" | "bad")}
        >
          {elem}
        </Button>
      ))}
    </>
  );
}

interface InitValues {
  options: { good: number; neutral: number; bad: number };
  onLeaveFeedback: (key: "good" | "neutral" | "bad") => void;
}
