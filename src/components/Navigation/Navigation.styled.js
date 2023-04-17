import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;

  @media screen and (max-width: 767.9px) {
    max-width: 186px;
    margin: 0 auto 15px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  @media screen and (min-width: 768px) {
    &:not(:first-child) {
      margin-top: 21px;
    }

    & svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const LinkName = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-family: var(--secondary-font-family);

  @media screen and (max-width: 767px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    margin-left: 23px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--primary-text-color);
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  & svg {
    fill: var(--ascent-text-color2);
  }

  &:hover,
  &:focus {
    filter: drop-shadow(0px 3px 10px #4a56e280);
  }

  &:hover svg,
  &:focus svg {
    fill: var(--ascent-text-color);
    filter: drop-shadow(0px 3px 10px #4a56e280);
  }

  &.active svg {
    fill: var(--ascent-text-color);
    filter: drop-shadow(0px 3px 10px #4a56e280);
  }
  &.active span {
    font-weight: 700;
  }
`;
