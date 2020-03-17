import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function NavBarLink(props) {
	return (
		<LinkContainer exact to={props.to}>
			<Nav.Link onClick={props.onClick ? props.onClick : () => {}}>{props.text}</Nav.Link>
		</LinkContainer>
	);
}

export default NavBarLink;