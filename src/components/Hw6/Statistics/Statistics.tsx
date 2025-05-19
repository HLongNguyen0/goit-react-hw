import { Header } from "../Hw6.styled";
import { Message, StatisticsElem, StatisticsList } from "./Statistics.styled";

export default function Statistics({ options, total, positive }: InitValues) {
  return (
    <>
      <Header>Statistics</Header>
      {total() ? (
        <StatisticsList>
          {(Object.keys(options) as ("good" | "neutral" | "bad")[]).map(
            (elem) => (
              <StatisticsElem key={elem}>
                {elem} : {options[elem]}
              </StatisticsElem>
            )
          )}
          <StatisticsElem>total : {total()}</StatisticsElem>
          <StatisticsElem>persentage : {positive()}</StatisticsElem>
        </StatisticsList>
      ) : (
        <Message>No feedback given</Message>
      )}
    </>
  );
}

interface InitValues {
  options: { good: number; neutral: number; bad: number };
  total: () => number;
  positive: () => number;
}
