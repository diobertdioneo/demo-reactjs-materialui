import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Login from './Login.js';
import Workspace from './Workspace.js';
import FlatButton from 'material-ui/FlatButton';

class BaseApp extends Component{
	constructor(){
		super();
		this.state = { isAuthenticated: false};
	}

	setAuthenticated(auth) {
		this.setState({isAuthenticated: auth});
	}

	checkLogin() {
		if(this.state.isAuthenticated===false){
			return this.renderLogin();
		} else {
			return this.renderWorkspace();
		}
	}

	handleLogout(event){
		this.setAuthenticated(false);
	}

	renderLogin(){
		return(
			<div>
				<Login setAuthenticated={this.setAuthenticated.bind(this)}/>
			</div>
		);
	}

	renderWorkspace() {
		return(
			<div>
				<Workspace setAuthenticated={this.setAuthenticated.bind(this)}/>
			</div>
		);
	}

	render() {
		return(
			<div className="BaseApp">
		    	{this.checkLogin()}
			</div>
		);
	}
}

export default BaseApp;