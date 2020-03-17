import React, { Component } from 'react'
// import GlobalStyle from './styles/Global';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Summary, Skills, Experience, Contact, Navigation } from './components';

const Notfound = () => <h1>Not found</h1>


class App extends Component {
	state = {
		navbarOpen: false
	}

	handleNavbar = () => {
		this.setState({ navbarOpen: !this.state.navbarOpen });
	}

	render() {
		return (
			<>
				<Router basename='/resume'>
					<Navigation
						navbarState={this.state.navbarOpen}
						handleNavbar={this.handleNavbar}
					/>
					<Switch>
						<Route exact path="/" component={Summary} />
						<Route path="/skills" component={Skills} />
						<Route path="/experience" component={Experience} />
						<Route path="/contact" component={Contact} />
						<Route component={Notfound} />
					</Switch>
				</Router>
				{/* <GlobalStyle /> */}
			</>
		);
	}
}

export default App