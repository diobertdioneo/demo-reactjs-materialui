import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Quotes from './Quotes';
import Login from './Login';
import Workspace from './Workspace';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import '../css/App.css';


class App extends Component{

	render() {
		return (
	    	<div className="App">
		        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		        	<BrowserRouter>
		        		<Switch>
					        <Route exact path="/" component={Quotes}/>
					        <Route path="/login" component={Login}/>
					        <Route path="/workspace" component={Workspace}/>
					        <Route component={Quotes}/>
				        </Switch>
				    </BrowserRouter>
			  	</MuiThemeProvider>
	    	</div>
	    );
	}
}


export default App;