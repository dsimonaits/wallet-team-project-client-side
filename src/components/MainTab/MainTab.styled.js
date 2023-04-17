import styled from 'styled-components';

export const MainTabStyled = styled.div`
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 320px) {
    margin-bottom: 32px;
  }

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
    width: 480px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 480px;
      transform: translateX(-50%);
      height: 100%;
      width: 1px;
      background-color: #e7e5f2;
      width: 1px;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;
