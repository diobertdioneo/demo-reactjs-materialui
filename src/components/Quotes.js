import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Navigation from './Navigation'

class Quotes extends Component {

	constructor(props){
		super(props);
		this.state={
			quote: "This is the quote of the day!",
		}
	}

	getQuotes() {
		var myQuote = { quote: "just do it!" };
		this.setState(myQuote);
	}

	componentDidMount() {
    	this.getQuotes();
  	}

	render() {

		const { quote } = this.state;
		
	    return (
	    	<div className="Quotes" >
	    		<Navigation/>
	        	<Paper >
	        		<div>
			            { quote }
	            	</div>
				</Paper>
		    </div>
	    );
 	}
}

const centerPanelStyle = {
	textAlign: "center",
	marginTop: "25%",
	marginBottom: "25%",
	marginRight: "25%",
	marginLeft: "25%",
}

export default Quotes;