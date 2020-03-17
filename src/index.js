import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Users from './users';
import About from './about';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Notfound = () => <h1>Not found</h1>


const routing = (
	<Router>
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

		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/users" component={Users} />
			<Route path="/about" component={About} />
			<Route component={Notfound} />
		</Switch>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
