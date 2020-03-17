import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Summary, Skills, Experience, Contact, Navigation } from './components';

const Notfound = () => <h1>Not found</h1>

const routing = (
	<Router>
		<Navigation />
		<Switch>
			<Route exact path="/" component={Summary} />
			<Route path="/skills" component={Skills} />
			<Route path="/experience" component={Experience} />
			<Route path="/contact" component={Contact} />
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
