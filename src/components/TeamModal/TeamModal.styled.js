import styled from 'styled-components';

export const TeamWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }
`;
export const TeamList = styled.ul`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: baseline;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;

export const TeamItem = styled.li`
  position: relative;
  width: 100%;
  transition: var(--transition);
  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }
`;

export const TeamImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;
export const TeamInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  color: var(--primary-white-color);
  &:hover {
    opacity: 1;
  }
`;
export const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 26px;
  color: var(--primary-white-color);
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
`;

export const InfoDescr = styled.p`
  font-size: 18px;
`;
