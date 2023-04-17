import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 120px;
  height: 30px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 181px;
    height: 40px;
  }
`;


export const LogoIcon = styled.img`
  margin-right: 16px;
  width: 30px;
  height: 30px; 
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.p` 
  font-family: var(--secondary-font-family);
  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;  
  @media screen and (min-width: 768px) {    
    font-size: 30px;
  }
`;



