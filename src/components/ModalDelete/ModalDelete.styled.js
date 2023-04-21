import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const TextWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 1.2;
  /* max-width: 280px; */
  text-align: left;
  cursor: default;
`;

export const InfoWrapper = styled.div`
  padding: 10px;
  border: 1px solid var(--pink);
  border-radius: 10px;
`;
export const TextQ = styled.p`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.2;
  max-width: 280px;
  cursor: default;

  color: var(--pink);
`;

export const SpanBold = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-left: 5px;
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
  width: 300px;
  height: 50px;

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
  width: 300px;
  height: 50px;

  transition: var(--transition);
  &:hover,
  &:focus {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;
