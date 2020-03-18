import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import NavBarLink from './NavBarLink';

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
					<NavBarLink to="/" onClick={props.handleNavbar} text="Summary"/>
					<NavBarLink to="/skills" onClick={props.handleNavbar} text="Skills"/>
					<NavBarLink to="/experience" onClick={props.handleNavbar} text="Experience"/>
					<NavBarLink to="/contact" onClick={props.handleNavbar} text="Contact"/>
				</NavLinks>
			</CollapseWrapper>
		);
	}
	return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
	top: 4.5rem;
	float: right;
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
