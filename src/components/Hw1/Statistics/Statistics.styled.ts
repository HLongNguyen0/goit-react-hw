import styled from "styled-components";

export const StatisticsBox = styled.section`
  background-color: white;
  width: 320px;
  margin: 0 auto 40px;
  border-radius: 8px;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  padding: 24px 0;
`;
export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsElem = styled.li`
  background-color: gray;
  width: 100%;
  border: 1px solid black;
  padding: 24px 0;
  :first-child {
    border-bottom-left-radius: 8px;
  }
  :last-child {
    border-bottom-right-radius: 8px;
  }
  span {
    display: block;
    text-align: center;
  }
`;
