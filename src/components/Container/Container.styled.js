import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  width: 320px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    margin-right: 0;
    margin-left: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: 0;
    margin-left: 0;
  }
`;
