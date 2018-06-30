// // Include React 
// var React = require('react');

// // Here we include all of the sub-components
// var Child = require('./Child');

// // Here we will utilize the axios library to perform GET/POST requests
// var axios = require('axios');

// // Create the Parent Component
// var Parent = React.createClass({

// 	// Here we set a generic state associated with the number of clicks
// 	getInitialState: function(){
// 		return {
// 			clicks: 0,
// 			clickID: "Main"
// 		}
// 	},

// 	// Whenever the button is clicked we'll use setState to add to the clickCounter
// 	// Note the syntax for setting the state
// 	handleClick: function(){
// 		this.setState({clicks: 1 + this.state.clicks});
// 	},

// 	// Whenever the button is clicked we'll use setState to reset the clickCounter
// 	// This will reset the clicks -- and it will be passed  ALL children
// 	resetClick: function(){
// 		this.setState({clicks: 0});
// 	},

// 	// On each click save the click count
// 	componentDidUpdate: function(prevProps, prevState){
// 		console.log("COMPONENT UPDATED");

// 		// We will check if the click count has changed...
// 		if (prevState.clicks != this.state.clicks){

// 			// If it does, then update the clickcount in MongoDB
// 			axios.post('/api', {clickID: this.state.clickID, clicks: this.state.clicks})
// 				.then(function(results){
// 					console.log("Posted to MongoDB");
// 				})
// 		}
// 	},

// 	//  On load display the number of clicks
// 	componentDidMount: function(){
// 		console.log("COMPONENT MOUNTED");

// 		// The moment the page renders on page load, we will retrieve the previous click count.
// 		// We will then utilize that click count to change the value of the click state.
// 		axios.get('/api')
// 			.then(function(results){
// 				this.setState({
// 					clicks: results.data[0].clicks
// 				});
// 				console.log("RESULTS", results);
// 				console.log("Saved clicks", results.data[0].clicks);
// 			}.bind(this));
// 	},

// Include React 
var React = require('react');

// Here we include all of the sub-components
var Child = require('./Child');

// Here we include all of the sub-components
var Child2 = require('./Child2');

var VitalWebsites = require('./VitalWebsites');

var Database = require('./Database');

// var PhoneNum = require('./PhoneNum');

// Here we will utilize the axios library to perform GET/POST requests
var axios = require('axios');

// Create the Parent Component
var Parent = React.createClass({

	getInitialState: function(){
		return {
			clicks: 0,
			clickID: "Main",
			active: "3"
		}
	},

	// Whenever the button is clicked we'll use setState to add to the clickCounter
	// Note the syntax for setting the state
	templateClick: function(){
		// var newActive = active === 'Child' ? 'Child2' : "Child";
		this.setState({
			clicks: 1 + this.state.clicks,
			active: "1"
		});
	},

	contactClick: function(){
		this.setState({
			clicks: 0,
			active: "2"
		});
	},	

	// Whenever the button is clicked we'll use setState to reset the clickCounter
	// This will reset the clicks -- and it will be passed  ALL children
	vitalClick: function(){
		this.setState({
			clicks: 0,
			active: "3"
		});
	},

	dataClick: function(){
		this.setState({
			clicks: 0,
			active: "4"
		});
	},

	phoneClick: function(){
		this.setState({
			clicks:0,
			active: "5"
		});
	},

	allClick: function(){
		this.setState({
			clicks: 0,
			active: "6"
		});
	},

	// On each click save the click count
	componentDidUpdate: function(prevProps, prevState){
		console.log("COMPONENT UPDATED");

		// We will check if the click count has changed...
		if (prevState.clicks != this.state.clicks){

			// If it does, then update the clickcount in MongoDB
			axios.post('/api', {clickID: this.state.clickID, clicks: this.state.clicks})
				.then(function(results){
					console.log("Posted to MongoDB");
				})
		}
	},

	//  On load display the number of clicks
	componentDidMount: function(){
		console.log("COMPONENT MOUNTED");

		// The moment the page renders on page load, we will retrieve the previous click count.
		// We will then utilize that click count to change the value of the click state.
		axios.get('/api')
			.then(function(results){
				this.setState({
					clicks: results.data[0].clicks
				});
				console.log("RESULTS", results);
				console.log("Saved clicks", results.data[0].clicks);
			}.bind(this));
	},

	// Here we render the function
	render: function(){
		var active = this.state.active;

		return(
				<div className="container" style={{width: '100%',padding: '0px',fontType: 'Serif'}}>
			
					<div className="jumbotron" style={{padding: '10px', background: 'steelblue', color: 'white', borderRadius: '0px'}}>
						
						<p style={{fontSize: '30px', fontWeight: 'bold'}}>COMMON VITAL WEBSITES AND LINKS</p>
						<hr/>
						<p>
							{/*Here we create a button click. Note how we have an onClick event associate with our handleClick function.*/}
							<a className="btn btn-danger btn-lg" type="button" onClick={this.vitalClick}>Vital Websites</a>
							<span> </span>
							<a className="btn btn-danger btn-lg" type="button" onClick={this.templateClick}>Templates</a>
							<span> </span>
							<a className="btn btn-danger btn-lg" type="button" onClick={this.contactClick}>Contacts</a>
							<span> </span>
							<a className="btn btn-danger btn-lg" type="button" onClick={this.dataClick}>Databases</a>
							<span> </span>
							<a className="btn btn-danger btn-lg" type="button" onClick={this.phoneClick}>Contacts</a>
							<span> </span>
							<a className="btn btn-danger btn-lg" type="button" onClick={this.allClick}>Show All</a>
							<span> </span>
							{/*Here we create a button click for resetting the clickCounter*/}
							{/*<a className="btn btn-danger btn-lg" type="button" onClick={this.resetClick}>Contacts</a>*/}
						</p>
						<p style={{fontSize: '15px'}}>CVWL Trial MERN 1-mk-3.2</p>
						{/*<p><em>Now backed by the power of MongoDB!</em> Just visit <a href="/api">/api</a> to check out the DB!</p>*/}
						{/*<p>*/}
							{/*Here we create a button click. Note how we have an onClick event associate with our handleClick function.*/}
							{/*<a className="btn btn-primary btn-lg" type="button" onClick={this.handleClick}>CLICK ME!!!!</a>*/}
							{/*<span> </span>*/}
							{/*Here we create a button click for resetting the clickCounter*/}
							{/*<a className="btn btn-danger btn-lg" type="button" onClick={this.resetClick}>Reset</a>*/}
						{/*</p>*/}
					</div>


				<div className="row" style={{padding: '0px', margin: '1%'}}>



					{/*This represents the "Parent"*/}
					{/*<div className="col-md-8">
						<VitalWebsites clicks={this.state.activeMain}/>
					</div>*/}

					{/*This represents the "Parent"*/}
					{/*<div className="col-md-4" style={{marginRight: '0px'}}>
						Here we'll deploy the child component. We'll pass it the parent's click counter as a "state"
						<Child clicks={this.state.clicks}/>
					</div>*/}

						{active === '1' ? (
                    		<div className="col-md-12">
                    			<Child/>
                    		</div>
                		) : active === '2' ? (
                    		<div className="col-md-12">
                    			<Child2/>
                    		</div>
                		) : active === '3' ? (
                			<div className="col-md-12">
                				<VitalWebsites/>
                			</div>
                		) : active === '4' ? (
                			<div className="col-md-12">
                				<Database/>
                			</div>
                		) : active === '5' ? (
                			<div className="col-md-12">
                				<PhoneNum/>
                			</div>
                		) : active === '6' ? (
                		<div>
                			<div className="col-md-8">
                				<VitalWebsites/>
                			</div>
                			<div className="col-md-4">
                				<Child/>
                			</div>
                			<div className="col-md-4">
                				<Child2/>
                			</div>
                			<div className="col-md-4">
                				<Database/>
                			</div>
                		</div>
                		) : null}

					
					{/*<div className="col-md-4">
						{active === '1' ? (
                    		<Child clicks={this.state.clicks}/>
                		) : active === '2' ? (
                    		<Child2 clicks={this.state.clicks}/>
                		) : null}
					</div>*/}

				</div>

			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Parent;