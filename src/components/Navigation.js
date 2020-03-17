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
				<LinkContainer to="/users">
					<Nav.Link>Users</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/about">
					<Nav.Link>About</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar>
	);
}

export default Navigation;