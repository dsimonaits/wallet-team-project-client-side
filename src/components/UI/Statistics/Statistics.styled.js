import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 20px;
`;

export const Text = styled.h2`
  font-family: var(--primary-font-family);
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: var(--primary-text-color);
  margin-bottom: 8px;
`;
export const SubWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 767px) {
    width: 395px;
  }
`;
