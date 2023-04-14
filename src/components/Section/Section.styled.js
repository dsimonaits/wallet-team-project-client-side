import styled from 'styled-components';

export const SectionStyled = styled.section`
  background-color: var(--background-color);
  backdrop-filter: blur(25px);
  padding-top: 12px;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    height: 100vh;
  }

  @media screen and (min-width: 1279px) {
    padding-top: 46px;
  }
`;
