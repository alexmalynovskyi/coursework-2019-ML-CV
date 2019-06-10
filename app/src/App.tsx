import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { Layout } from './containers/';
import { Dashboard } from './components/';

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/" component={() => <Dashboard title="Mike Pastula coursework" />} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
