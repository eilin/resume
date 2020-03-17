import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from "styled-components";
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
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
`;

function Navigation(props) {
	return (
		<Container>
			<Navbar bg="dark" variant="dark">
				<FlexContainer>
					<Navbar.Brand href="/">Edward Lin | Résumé</Navbar.Brand>
					<NavLinks>
						<LinkContainer exact to="/">
							<Nav.Link>Summary</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/skills">
							<Nav.Link>Skills</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/experience">
							<Nav.Link>Experience</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
					</NavLinks>
					<BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
				</FlexContainer>
			</Navbar>
			<CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
		</Container>
	);
}

export default Navigation;