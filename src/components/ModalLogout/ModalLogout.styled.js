import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
`;

export const ExitButton = styled.button`
  padding: 13px;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ascent-text-color);
  border: 1px solid #4a56e2;
  background-color: var(--primary-white-color);
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const CancelButton = styled.button`
  padding: 13px;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-white-color);
  border: none;
  background-color: var(--greenblue);
  border-radius: 20px;
`;
