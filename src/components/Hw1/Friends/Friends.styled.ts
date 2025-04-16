import styled from "styled-components";

export const FriendListBox = styled.ul`
  background-color: white;
  width: 304px;
  margin: 0 auto 40px;
  padding: 12px 8px;
  border-radius: 8px;
`;

export const FriendListElem = styled.li<{ status: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.status ? "green" : "red")};
  width: 100%;
  border-radius: 8px;
  text-align: center;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
