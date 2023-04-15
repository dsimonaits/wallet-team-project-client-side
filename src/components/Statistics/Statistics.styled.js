import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-image: url(); */
  height: 100%;

  /* padding: 32px, 16px, 44px, 69px; */
`;

export const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 715px;
  /* height: 100%; */
  justify-content: center;

  margin: 20px, 16px, 44px, 69px;
`;

export const Text = styled.h2`
  font-family: var(--primary-font-family);
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: var(--primary-text-color);
  margin: 32px, 0px, 20px, 84px;
`;

export const Box = styled.div`
  width: 395px;

  text-align: center;
`;
