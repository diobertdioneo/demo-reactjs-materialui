import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../css/App.css';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div className="Navigation">
        <AppBar title="Demo" onLeftIconButtonTouchTap={this.handleToggle}/>
        <Drawer 
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/login">Login</Link></MenuItem>
          <MenuItem><Link to="/workspace">Workspace</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
