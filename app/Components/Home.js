// Include React 
var React = require('react');

// Here we include all of the sub-components
// var GrandChild = require('./GrandChild');

// Create the Child Component
var Home = React.createClass({
	render: function(){
		return<h2>Home</h2>;
	}
});

// Export the component back for use in other files
module.exports = Home;