import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background: #6753bb;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
`;

export const Card = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
`;

export const Title = styled.span`
  width: 100%;
  color: #553ecd;
  margin: auto;
  font-size: 48px;
  letter-spacing: 1px;
  user-select: none;

  #first {
    font-weight: 900;
    color: #cd713e;
  }

  #second {
    font-weight: 900;
  }
`;

export const Form = styled.form`
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 12px;
    color: #df2929;
    cursor: pointer;
  }
`;

export const AlertMessage = styled.span<{ isTooltip: boolean }>`
  z-index: 1;
  position: relative;
  left: 43%;
  top: 5px;
  padding: 2px 4px;
  font-size: 12px;
  margin: 0;
  color: #eee;
  background: rgb(0, 0, 0, 0.8);
  visibility: hidden;

  ${props =>
    props.isTooltip &&
    css`
      visibility: visible;
    `}

  &::after {
    z-index: 1;
    position: absolute;
    bottom: 150%;
    left: 50%;
    top: 18px;
    margin-left: -5px;
    width: 0;
    border-top: 5px solid rgb(0, 0, 0, 0.8);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: ' ';
    font-size: 0;
  }
`;

export const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 44px;
  outline: none;
  background: #e8e6f2;
  border: 1px solid #d2cfe5;
  color: #555;
  font-size: 22px;
  padding: 8px;
  border-radius: 6px;
  transition: border-color 0.3s;
  padding-right: 32px;

  ${props =>
    props.isError &&
    css`
      border: 2px solid #df2929;
    `}
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  background: #cd713e;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 22px;
  font-weight: 500;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background: #b26336;
  }
`;

export const Display = styled.span`
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
  color: #555;
  font-size: 72px;
  font-weight: bold;
  margin-top: 22px;
  margin-bottom: 8px;
`;
