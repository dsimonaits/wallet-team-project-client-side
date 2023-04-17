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

  @media screen and (min-width: 768px){
    margin-bottom: 0;
  }
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
  cursor: pointer;

  transition: var(--transition);
   &:hover, 
   &:focus {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
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
  cursor: pointer;

  transition: var(--transition);
   &:hover, 
   &:focus {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;
