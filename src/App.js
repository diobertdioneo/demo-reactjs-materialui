import React, { Component } from 'react';
import BaseApp from './components/BaseApp'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends Component{

	render() {
		return (
	    	<div className="App">
		        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		        	<BaseApp/>
			  	</MuiThemeProvider>
	    	</div>
	    );
	}
}


export default App;