import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import styled from "styled-components";
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';
import NavBarLink from './NavBarLink';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
	height: 5rem;
	margin: 0 auto;
`;

const NavLinks = styled(Nav)`
  justify-self: end;
  list-style-type: none;
	margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
	}
	margin-left: auto;
`;

function Navigation(props) {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/resume">
					<div>
						<span >Edward Lin</span>
						<span className="cursive-nav-brand">Résumé</span>
					</div>
				</Navbar.Brand>
				<FlexContainer>
					<NavLinks>
						<NavBarLink to="/" text="Summary"/>
						<NavBarLink to="/skills" text="Skills"/>
						<NavBarLink to="/experience" text="Experience"/>
						<NavBarLink to="/contact" text="Contact"/>
					</NavLinks>
				</FlexContainer>
				<div className="dummy-align"/>
				<BurgerWrapper>
					<BurgerMenu
						navbarState={props.navbarState} 
						handleNavbar={props.handleNavbar}
					/>
				</BurgerWrapper>
			</Navbar>
			<CollapseMenu 
        navbarState={props.navbarState} 
				handleNavbar={props.handleNavbar}
      />
		</div>
	);
}

export default Navigation;