import logo from '../../iamges/logo.svg';
import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon src={logo} alt="Logo"/>
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};

export default Logo;

