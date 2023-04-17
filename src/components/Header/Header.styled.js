import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: var(--primary-white-color);
  padding: 0 20px;
  /* margin: 0 auto; */

  @media screen and (min-width: 768px) {
    height: 80px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    /* width: 1280px; */
    padding: 0 16px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  margin-top: 20px;
`;

export const AuthContainer = styled.div`
  display: flex;
  padding-top: 5px;
  align-items: end;
`;

export const Name = styled.p`
  padding-right: 12px;
  font-size: 18px;
  line-height: 27px;
  color: var(--primary-grey-color);

  @media screen {
  }
`;

export const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  font-family: var(--primary-font-family);
  font-size: 18px;
  line-height: 27px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--primary-grey-color);

  &:hover,
  &:focus {
    color: var(--pink);
  }
  &:hover svg,
  &:focus svg {
    fill: var(--pink);
  }
`;

export const LineSvg = styled.svg`
  width: 2px;
  height: 30px;
  margin-top: 16px;
  margin-right: 12px;
`;

export const ExitSvg = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--primary-grey-color);
  transition: var(--transition);
  margin-right: 8px;
`;
