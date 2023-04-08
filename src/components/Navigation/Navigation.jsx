import Media from 'react-media';
import { ReactComponent as HomeSvg } from '../../images/home-icon.svg';
import { ReactComponent as StatisticsSvg } from '../../images/statistics-icon.svg';
import { ReactComponent as FinanceSvg } from '../../images/finance-icon.svg';
import { Nav, NavItem, LinkName, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLinkStyled to="home">
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
      <Media
        queries={{ small: '(max-width: 767.9px)' }}>
        {matches =>
          matches.small && (
            <NavItem>
              <NavLinkStyled to="currencies">
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
