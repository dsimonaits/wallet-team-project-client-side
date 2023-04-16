import Media from 'react-media';
import mediaQueries from '../../utils/media';
import Logo from 'components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import {
  AuthContainer,
  Button,
  ExitSvg,
  HeaderContainer,
  LineSvg,
  LogoContainer,
  MainContainer,
  Name,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { toggleModalLogout } from 'redux/global/globalSlice';
import { selectUser } from 'redux/session/sessionSelectors';
import ThemeSwitcher from 'components/ThemeChanger/ThemeSwitcher';

export default function Header({ themeToggler }) {
  const { isModalLogoutOpen } = useSelector(store => store.global);
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <>
      {isModalLogoutOpen && <ModalLogout />}
      <HeaderContainer className="HeaderTheme">
        <MainContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <ThemeSwitcher themeToggler={themeToggler} />
          <AuthContainer>
            <Name>{name}</Name>
            <Media queries={mediaQueries}>
              {matches =>
                (matches.tablet || matches.desktop) && (
                  <LineSvg>
                    <use href={`${sprite}#icon-vertical-line`}></use>
                  </LineSvg>
                )
              }
            </Media>
            <Button onClick={() => dispatch(toggleModalLogout())} type="button">
              <ExitSvg>
                <use href={`${sprite}#icon-exit`}></use>
              </ExitSvg>
              <Media queries={mediaQueries}>
                {matches => (matches.tablet || matches.desktop) && <p>Exit</p>}
              </Media>
            </Button>
          </AuthContainer>
        </MainContainer>
      </HeaderContainer>
    </>
  );
}
