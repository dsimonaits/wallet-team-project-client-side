import Media from 'react-media';
import mediaQueries from 'utils/media';
import { ReactComponent as HomeSvg } from '../../images/home-icon.svg';
import { ReactComponent as StatisticsSvg } from '../../images/statistics-icon.svg';
import { ReactComponent as FinanceSvg } from '../../images/finance-icon.svg';
import { Nav, NavItem, LinkName, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLinkStyled exact="true" to="home">
          <HomeSvg />
          <LinkName>Home</LinkName>
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="diagram">
          <StatisticsSvg />
          <LinkName>Statistics</LinkName>
        </NavLinkStyled>
      </NavItem>
      <Media queries={mediaQueries}>
        {matches =>
          matches.mobile && (
            <NavItem>
              <NavLinkStyled to="currency">
                <FinanceSvg />
                <LinkName>Currencies</LinkName>
              </NavLinkStyled>
            </NavItem>
          )
        }
      </Media>
    </Nav>
  );
};

export default Navigation;
