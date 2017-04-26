// Include React 
var React = require('react');

// Here we include all of the sub-components
var About = require('./About');
var Inbox = require('./Inbox');
var Home = require('./Home');

// Create the Child Component
var Child3 = React.createClass({
	render (){
		var Offspring;
		switch (this.props.route){
			case 'about': Offspring = About; break;
			case 'inbox': Offspring = Inbox; break;
			default: Offspring = Home;
		}
		return(
			<div>
			<h1>Child3</h1>
			<Offspring/>
			</div>
		)
	}
});

function render(){
	var route = window.location.hash.substr(1);
	React.render(<Child3 route={route} />, document.body);
	// React.render(<Child3 route={route} />);
}

window.addEventListener('hashchange',render);
render();

// Export the component back for use in other files
module.exports = Child3;