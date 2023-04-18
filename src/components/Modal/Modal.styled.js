import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-white-color);
  z-index: 1;
  overflow: auto;

  @media screen and (min-width: 768px) {
    background: rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }
`;

export const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-white-color);
  padding: 20px;
  position: relative;
  z-index: 1000;
  transition: all 0.5s linear;

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    border-radius: 20px;
    padding: 40px;
  }
`;

export const CloseBtnBox = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: block;

  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    /* background-color: #24f0a7; */
    box-shadow: 0 0 8px #24cca7;
  }
`;

export const CloseButton = styled.button`
  height: fit-content;
  padding: unset;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const CloseIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
