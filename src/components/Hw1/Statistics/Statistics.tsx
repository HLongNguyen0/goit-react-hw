import {
  StatisticsBox,
  StatisticsElem,
  StatisticsList,
  StatisticsTitle,
} from "./Statistics.styled";

export default function Statistics({ title, data }: InitValues) {
  return (
    <StatisticsBox>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {data.map((e) => (
          <StatisticsElem key={e.id}>
            <span>{e.label}</span>
            <span>{e.percentage}</span>
          </StatisticsElem>
        ))}
      </StatisticsList>
    </StatisticsBox>
  );
}

interface InitValues {
  title: string;
  data: {
    id: string;
    label: string;
    percentage: number;
  }[];
}
