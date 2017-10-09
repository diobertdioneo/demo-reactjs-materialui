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

class Workspace extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});
	handleClose = () => this.setState({open: false});
	handleLogout = () =>{
		this.props.setAuthenticated(false);
	}
	

	render() {
	    return (
	    	<div className="Workspace">
	    	<AppBar title="Demo Workspace" onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<FlatButton label="Logout" onClick={(event) => this.handleLogout(event)}/>} />
		    	<Drawer
		          docked={false}
		          width={200}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		        >
		        	<MenuItem onClick={this.handleClose}>Employees</MenuItem>
		        </Drawer>
	        	<Paper zDepth={2}>
	        		<Table>
					    <TableHeader>
					      <TableRow>
					        <TableHeaderColumn>ID</TableHeaderColumn>
					        <TableHeaderColumn>Name</TableHeaderColumn>
					        <TableHeaderColumn>Status</TableHeaderColumn>
					      </TableRow>
					    </TableHeader>
					    <TableBody>
					      <TableRow>
					        <TableRowColumn>1</TableRowColumn>
					        <TableRowColumn>John Smith</TableRowColumn>
					        <TableRowColumn>Employed</TableRowColumn>
					      </TableRow>
					      <TableRow>
					        <TableRowColumn>2</TableRowColumn>
					        <TableRowColumn>Randal White</TableRowColumn>
					        <TableRowColumn>Unemployed</TableRowColumn>
					      </TableRow>
					      <TableRow>
					        <TableRowColumn>3</TableRowColumn>
					        <TableRowColumn>Stephanie Sanders</TableRowColumn>
					        <TableRowColumn>Employed</TableRowColumn>
					      </TableRow>
					      <TableRow>
					        <TableRowColumn>4</TableRowColumn>
					        <TableRowColumn>Steve Brown</TableRowColumn>
					        <TableRowColumn>Employed</TableRowColumn>
					      </TableRow>
					      <TableRow>
					        <TableRowColumn>5</TableRowColumn>
					        <TableRowColumn>Christopher Nolan</TableRowColumn>
					        <TableRowColumn>Unemployed</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
				</Paper>
		    </div>
	    );
 	}
}

export default Workspace;