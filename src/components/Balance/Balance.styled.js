import styled from 'styled-components';
export const mediaQueries = {
  response: '(max-width: 479px)',
  mobile: '(min-width: 480px) and (max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)',
};
export const BalanceContainer = styled.div`
  padding: 8px 40px 11px 40px;
  display: flex;
  flex-flow: column;
  justify-content: left;
  width: 280px;
  height: 80px;
  background: #ffffff;
  border-radius: 30px;
  @media ${mediaQueries.tablet} {
    width: 336px;
    height: 80px;
  }
  @media ${mediaQueries.desktop} {
    width: 395px;
    height: 80px;
  }
`;
export const BalanceTitle = styled.span`
  width: 118px;
  height: 13px;
  margin-bottom: 12px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #a6a6a6;
  @media ${mediaQueries.tablet} {
    width: 141px;
    height: 13px;
  }
  @media ${mediaQueries.desktop} {
    width: 94px;
    height: 13px;
  }
`;
export const TotalBalance = styled.p`
  width: 175px;
  height: 36px;
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #000000;
  @media ${mediaQueries.tablet} {
    width: 175px;
    height: 36px;
  }
  @media ${mediaQueries.desktop} {
    width: 175px;
    height: 36px;
  }
`;
export const Grivan = styled.span`
  padding-right: 5px;
  font-family: var(--secondary-font-family);
  font-size: 30px;
  font-weight: 300;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
`;
