import styled from "styled-components";

export const SearchbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 64px;
  padding: 12px 24px;

  background-color: #3f51b5;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  z-index: 1100;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 600px;
  border-radius: 3px;

  background-color: #fff;

  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-image: url("https://img.icons8.com/search");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;

  cursor: pointer;
  opacity: 0.6;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;

  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);

  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;

  width: 100%;

  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  font: inherit;
  font-size: 20px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
