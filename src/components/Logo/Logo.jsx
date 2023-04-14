import logo from '../../images/logo.svg';
import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer to="/">
      <LogoIcon src={logo} alt="Logo"/>
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};

export default Logo;

