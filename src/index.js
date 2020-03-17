import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Home, Users, About, Navigation } from './components';

const Notfound = () => <h1>Not found</h1>

const routing = (
	<Router>
		<Navigation />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/users" component={Users} />
			<Route path="/about" component={About} />
			<Route path="/resume"><Redirect to="/" /></Route>
			<Route component={Notfound} />
		</Switch>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
