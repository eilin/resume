import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/">APP</Navbar.Brand>
			<Nav>
				<LinkContainer exact to="/">
					<Nav.Link>Home</Nav.Link>
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
			</Nav>
		</Navbar>
	);
}

export default Navigation;