import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
`;

export const InfoImg = styled.img`
  display: block;
  width: 400px;
`;

export const InfoTextContainer = styled.div`
  padding: 20px 40px;

  * {
    margin-bottom: 8px;
  }
`;

export const InfoTitle = styled.h2``;

export const InfoText = styled.span`
  display: block;
`;

export const InfoList = styled.ul``;

export const InfoListElem = styled.li``;

export const InfoListLink = styled(NavLink)``;
