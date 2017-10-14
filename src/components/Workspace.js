import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Navigation from './Navigation'

class Workspace extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			employees: [{"id":1,"name":"John Doe", "email":"john.doe@fakeemail.com"}]
		};
	}

	handleToggle = () => this.setState({open: !this.state.open});
	handleClose = () => {
		this.setState({open: false});
	}

	handleLogout = () =>{
	}

	retrieveEmployees = () => {
	}
	

	render() {
	    return (
	    	<div className="Workspace">
	    		<Navigation/>
	        	<Paper zDepth={2}>
	        		<Table>
					    <TableHeader>
					      <TableRow>
					        <TableHeaderColumn>ID</TableHeaderColumn>
					        <TableHeaderColumn>Name</TableHeaderColumn>
					        <TableHeaderColumn>Email</TableHeaderColumn>
					      </TableRow>
					    </TableHeader>
					    <TableBody>
						    <TableRow>
						    	<TableRowColumn>1</TableRowColumn>
						    	<TableRowColumn>John Doe</TableRowColumn>
						    	<TableRowColumn>john.doe@fake.email.com</TableRowColumn>
					    	</TableRow>
					    </TableBody>
					  </Table>
				</Paper>
		    </div>
	    );
 	}
}

const restUrl = {
	"usersUrl": "http://jsonplaceholder.typicode.com/users"
};

export default Workspace;