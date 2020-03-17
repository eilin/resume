import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const CollapseMenu = (props) => {
	const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

	if (props.navbarState === true) {
		return (
			<CollapseWrapper style={{
				transform: open.interpolate({
					range: [0, 0.2, 0.3, 1],
					output: [0, -20, 0, -200],
				}).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
			}}
			>
				<NavLinks>
					{/* TODO try to componentize the links list */}
					<LinkContainer exact to="/">
						<Nav.Link onClick={props.handleNavbar}>Summary</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/skills">
						<Nav.Link onClick={props.handleNavbar}>Skills</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/experience">
						<Nav.Link onClick={props.handleNavbar}>Experience</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/contact">
						<Nav.Link onClick={props.handleNavbar}>Contact</Nav.Link>
					</LinkContainer>
				</NavLinks>
			</CollapseWrapper>
		);
	}
	return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
