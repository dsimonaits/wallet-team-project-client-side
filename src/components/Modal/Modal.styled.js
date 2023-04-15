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
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
export const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-white-color);
  padding: 20px;
  position: relative;

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
