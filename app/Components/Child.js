// Include React 
var React = require('react');

// Here we include all of the sub-components
var GrandChild = require('./GrandChild');

// Create the Child Component
var Child = React.createClass({

	// Child has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading" style={{background: 'skyblue',color: 'white'}}>
					<h3 className="panel-title text-center" style={{fontSize: '20px'}}><b>Templates</b></h3>
				</div>
				<div className="panel-body text-left" style={{background: 'skyblue'}}>
					<div className="panel" style={{background: 'skyblue'}}>
						<p  style={{color: 'white'}}>Updated 03/20/2017 1:19pm</p>
						<ol class="nav nav-pills nav-stacked" style={{color: 'white',fontSize: '18px'}}>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>Proposal</a></li>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>Model Forms</a></li>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>DUA</a></li>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>Position Paper</a></li>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>DSH Calculator</a></li>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>Jurisdiction Brief</a></li>
							<li role="presentation" class="active"><a href="#" target="_blank" style={{color: '#e6f5ff'}}>Recalculation Request</a></li>
						</ol>
					</div>
					{/* The child will reference the parent's click counter as a "prop".
						It will the nuse it with its own state "number"
					*/}
					{/* <h1>{this.state.number + 2*this.props.clicks}</h1>*/}

					{/*It will then pass in both those numbers to its own child "grandchild
					   Note there is a better way to do this via didReceiveProps... but we'll get to that later.
					*/}
					<GrandChild />

				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Child;