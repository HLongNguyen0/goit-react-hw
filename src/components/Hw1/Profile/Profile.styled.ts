import styled from "styled-components";

export const ProfileBox = styled.section`
  background-color: white;
  width: 320px;
  margin: 0 auto 40px;
  border-radius: 8px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`;

export const ProfileImg = styled.img`
  background-color: gray;
  width: 200px;
  margin-bottom: 24px;
  border-radius: 50%;
  text-align: center;
`;

export const ProfileStats = styled.ul`
  display: flex;
  li {
    background-color: gray;
    width: 100%;
    padding: 24px 0;
    border: 1px solid black;
    text-align: center;
    :first-child {
      border-bottom-left-radius: 8px;
    }
    :last-child {
      border-bottom-right-radius: 8px;
    }
  }
`;
