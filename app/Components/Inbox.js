// Include React 
var React = require('react');

// Here we include all of the sub-components
// var GrandChild = require('./GrandChild');

// Create the Child Component
var Inbox = React.createClass({
	render: function(){
		return<h2>Inbox</h2>;
	}
});

// Export the component back for use in other files
module.exports = Inbox;