import styled from 'styled-components';

export const SectionStyled = styled.section`
  position: relative;
  /* background-color: rgba(229, 229, 229, 0.4); */
  padding-top: 12px;
  padding-bottom: 40;
  min-height: 640px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    padding-top: 32px;
    background-size: 50%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 46px;
  }
`;
