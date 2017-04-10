// Include React 
var React = require('react');

// Here we include all of the sub-components
// var GrandChild = require('./GrandChild');

// Create the Child Component
var Child2 = React.createClass({

	// Child has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Contacts</h3>
				</div>
				<div className="panel-body text-left">
					<div className="panel">
						<p>Updated 03/20/2017 1:19pm</p>
						<ol className="nav nav-pills nav-stacked">
							<li role="presentation" className="active"><a href="#" target="_blank">Arcadia</a></li>
							<li role="presentation" className="active"><a href="#" target="_blank">Attorneys</a></li>
							<li role="presentation" className="active"><a href="#" target="_blank">HRS</a></li>
						</ol>
					</div>
					{/* The child will reference the parent's click counter as a "prop".
						It will the nuse it with its own state "number"
					*/}
					<h1>{this.state.number + 2*this.props.clicks}</h1>

					{/*It will then pass in both those numbers to its own child "grandchild
					   Note there is a better way to do this via didReceiveProps... but we'll get to that later.
					*/}
					{/*<GrandChild number={this.state.number + 2*this.props.clicks}/>*/}

				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Child2;