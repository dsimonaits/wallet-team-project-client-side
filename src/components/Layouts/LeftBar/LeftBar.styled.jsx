import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767.9px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
    justify-content: flex-end;
  }
`;
