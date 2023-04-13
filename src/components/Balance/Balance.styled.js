import styled from 'styled-components';

export const mediaQueries = {
  response: '(max-width: 479px)',
  mobile: '(min-width: 480px) and (max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)',
};

export const BalanceContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 80px;
  left: 20px;
  top: 128px;

  background: #FFFFFF;
  border-radius: 30px;

  @media ${mediaQueries.tablet} {
    width: 336px;
    height: 80px;
    left: 32px;
    top: 214px;
  }

  @media ${mediaQueries.desktop} {
    width: 395px;
    height: 80px;
    left: 16px;
    top: 214px;
  }
`;

export const BalanceTitle = styled.h2`
  position: absolute;
  width: 118px;
  height: 13px;
  left: 52px;
  top: 136px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;

  color: #A6A6A6;

  @media ${mediaQueries.tablet} {
    width: 141px;
    height: 13px;
    left: 72px;
    top: 222px;
  }

  @media ${mediaQueries.desktop} {
    width: 94px;
    height: 13px;
    left: 56px;
    top: 222px;
  }
`;

export const TotalBalance = styled.p`
  position: absolute;
  width: 175px;
  height: 36px;
  left: 52px;
  top: 160.8px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;

  @media ${mediaQueries.tablet} {
    width: 175px;
    height: 36px;
    left: 72px;
    top: 246.8px;
  }

  @media ${mediaQueries.desktop} {
    width: 175px;
    height: 36px;
    left: 56px;
    top: 247px;
  }
`;

