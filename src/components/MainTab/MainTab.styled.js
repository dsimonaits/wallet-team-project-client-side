import styled from 'styled-components';

export const MainTabStyled = styled.div`
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-flow: column;
    justify-content: left;
  }
`;
