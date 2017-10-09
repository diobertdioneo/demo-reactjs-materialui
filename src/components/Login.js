import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class Login extends Component {

	constructor(props){
		super(props);
		this.state={
			username: "",
			password: ""
		}
	}

	handleClick(event){
		this.props.setAuthenticated(true);
		
	}

	render() {
		
	    return (
	    	<div className="Login" >
	    	<AppBar title="Demo Login" showMenuIconButton={false} />
	        	<Paper style={loginPanelStyle} zDepth={2}>
	        		<div>
			            <TextField
			            	hintText="Enter your Username"
			            	floatingLabelText="Username"
			            	onChange = {(event,newValue) => this.setState({username:newValue})}/>
		            </div>
		            <div>
			            <TextField
			            	type="password"
			            	hintText="Enter your Password"
			            	floatingLabelText="Password"
			            	onChange = {(event,newValue) => this.setState({password:newValue})}/>
		            </div>
		            <div>
		            	<RaisedButton style={centerHorizontalBlock} label="Submit" primary={true} style={centerHorizontalBlock} onClick={(event) => this.handleClick(event)}/>
		            	<br/>
	            	</div>
				</Paper>
		    </div>
	    );
 	}
}

const centerHorizontalBlock = {
	marginLeft: "40%",
	marginRight: "40%",
	display: "block"
};

const divCenterStyle = {
	height: "100",
	width: "100",
	textAlign: "center",
    "margin": 10,
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "margin-right": "-50%",
    "transform": "translate(-50%, -50%)"
};

const loginPanelStyle = {
	textAlign: "center",
	marginTop: "25%",
	marginBottom: "25%",
	marginRight: "25%",
	marginLeft: "25%",
}

export default Login;