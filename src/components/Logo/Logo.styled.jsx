import styled from 'styled-components';


export const LogoContainer = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 181px;
    height: 40px;
  }
`;


export const LogoIcon = styled.img`
  margin-right: 15px;
  width: 30px;
  height: 30px; 
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.p`
  display: flex;
  align-items: center;
  margin: 0px;  
  font-family: var(--secondary-font-family);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  
  @media screen and (min-width: 768px) {
    width: 121px;
    font-size: 30px;
  }
`;



