// Include React 
var React = require('react');

// Create the GrandChild Component
var GrandChild = React.createClass({

	// GrandChild has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	// notice the line spacing is formatted for code folding neatness.
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Databases</h3>
				</div>
				<div className="panel-body text-left">
					<p>Updated 03/20/2017 1:19pm</p>
					<ol className="nav nav-pills nav-stacked">
						<li role="presentation" className="active">
							<a href="./" download="PT 1.06.accdb">
								PT (aka HCRIS or Project Tracking)
							</a>
						</li>
						<li role="presentation" className="active">
							<a href="./" download="philip.accdb">
								PHILIP (fka Tracking or Philip's Tracking Database)
							</a>
						</li>
						<li role="presentation" className="active">
							<a href="./" download="SSI 1.01.accdb">
								SSI Chart (graph database)
							</a>
						</li>
					</ol>
					{/* Grandchild will use it's own parents number 
					("child") with its own state.*/}
					<h1>{this.state.number + 4*this.props.number}</h1>
				</div>
			</div>
		
		)
	}

});

// Export the component back for use in other files
module.exports = GrandChild;