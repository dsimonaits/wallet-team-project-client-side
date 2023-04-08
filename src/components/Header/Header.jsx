import Media from 'react-media'
import { mediaQueries } from '../../utils/media'
// import { NavLink } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { getUser } from '../../redux/session/session-selectors'
// import { openModalLogout } from '../../redux/globall/global-actions'
// import s from './Header.module.css'
import Logo from 'components/Logo/Logo';
import { AuthContainer, Button, ExitSvg, HeaderContainer, LineSvg, LogoContainer, MainContainer, Name } from './Header.styled';
import sprite from '../../images/sprite.svg'


export default function Header() {
  // const dispatch = useDispatch()
  // const { name } = useSelector(getUser)

  return (
    <>
      <HeaderContainer>
        <MainContainer>
          <LogoContainer>
            {/* <NavLink exact to="./"> */}
                <Logo />
            {/* </NavLink> */}
          </LogoContainer>  
          <AuthContainer>
            <Name>Name</Name>
            <Media queries={mediaQueries}>
              {(matches) =>
                (matches.tablet || matches.desktop) && (
                 <LineSvg>
                    <use href={`${sprite}#icon-vertical-line`}></use>
                  </LineSvg>
                )
              }
            </Media>    
            <Button
              // onClick={() => dispatch(openModalLogout())}
              type="button"
            >  
              <ExitSvg>
                <use href={`${sprite}#icon-exit`}></use>
              </ExitSvg>
              <Media queries={mediaQueries}>
                {(matches) =>
                  (matches.tablet || matches.desktop) && (
                    <p>Exit</p>
                  )
                }
              </Media>
 
            </Button>
          </AuthContainer>
        </MainContainer>
      </HeaderContainer>
    </>
  )
}




