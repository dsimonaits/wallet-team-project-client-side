import styled from 'styled-components';

export const DashBoardContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    display: flex;
    /* width: 1280px; */
    flex-direction: row;
    -webkit-box-align: start;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`;
