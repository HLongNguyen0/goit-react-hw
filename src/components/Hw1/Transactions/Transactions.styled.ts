import styled from "styled-components";

export const TransactionHistoryTable = styled.table`
  background-color: white;
  width: 960px;
  margin: 0 auto 40px;
  border-radius: 8px;
  text-align: center;
  border-collapse: collapse;
  td {
    border: 1px solid black;
  }
`;

export const TransactionHistoryTHead = styled.thead`
  background-color: gray;
  th {
    padding: 8px 0;
    :first-child {
      border-top-left-radius: 8px;
    }
    :last-child {
      border-top-right-radius: 8px;
    }
  }
`;
