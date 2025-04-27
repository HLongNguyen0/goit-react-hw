import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);

  z-index: 1200;
`;

export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  & img {
    width: 100%;
    height: 100%;
  }
`;
