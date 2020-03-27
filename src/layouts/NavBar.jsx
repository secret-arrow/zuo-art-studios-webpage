import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/another_zuo_studios.png';

const StyledLink = styled(Link)`
  padding-top: 1em;
  display: flex;
  font-weight: 700;
  align-items: center;
  img {
    width: 9em;
    height: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  padding-right: 1.5em;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Zuo Art Studio logo" />
    </StyledLink>
    <Nav>
      {/* <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link> */}
      <Link to="/about"><h3 style={{fontFamily: "Open Sans"}}>About Me</h3></Link>
    </Nav>
  </Headroom>
);

export default NavBar;
