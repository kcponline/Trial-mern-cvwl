// Include React 
var React = require('react');

// Here we include all of the sub-components
var Child = require('./Child');

// Here we will utilize the axios library to perform GET/POST requests
var axios = require('axios');

// Create the Parent Component
var Parent = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			clicks: 0,
			clickID: "Main"
		}
	},

	// Whenever the button is clicked we'll use setState to add to the clickCounter
	// Note the syntax for setting the state
	handleClick: function(){
		this.setState({clicks: 1 + this.state.clicks});
	},

	// Whenever the button is clicked we'll use setState to reset the clickCounter
	// This will reset the clicks -- and it will be passed  ALL children
	resetClick: function(){
		this.setState({clicks: 0});
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

		return(

			<div className="container">
					<div className="jumbotron" >
						<h3>COMMON VITAL WEBSITES AND LINKS</h3>
						<hr/>
						{/*<p><em>Now backed by the power of MongoDB!</em> Just visit <a href="/api">/api</a> to check out the DB!</p>*/}
						{/*<p>*/}
							{/*Here we create a button click. Note how we have an onClick event associate with our handleClick function.*/}
							{/*<a className="btn btn-primary btn-lg" type="button" onClick={this.handleClick}>CLICK ME!!!!</a>*/}
							{/*<span> </span>*/}
							{/*Here we create a button click for resetting the clickCounter*/}
							{/*<a className="btn btn-danger btn-lg" type="button" onClick={this.resetClick}>Reset</a>*/}
						{/*</p>*/}
					</div>

				<div className="row">



					{/*This represents the "Parent"*/}
					<div className="col-md-6">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Websites</h3>
							</div>

						<div className="row">
							<div className="col-md-12">
								<div className="panel-body text-left">
									<div class="panel">
										<p>Updated 03/20/2017 12:55pm</p>
										<ol class="nav nav-pills nav-stacked">
											<li role="presentation" class="active"><a href="https://www.costreportdata.com/worksheet_formats.html" target="_blank">Cost Report Data: Online HCRIS & Worksheet Samples</a></li>
											<li role="presentation" class="active"><a href="https://hcris.hfssoft.com/iFrame/Login/iLogin.aspx" target="_blank">HFS: Online Subscription HCRIS Database</a></li>
											<li role="presentation" class="active"><a href="http://www.qualityreimbursement.com/" target="_blank">QRS Home Page: QRS home page</a></li>
											<li role="presentation" class="active"><a href="http://www.cms.gov/Research-Statistics-Data-and-Systems/Files-for-Order/CostReports/index.html" target="_blank">HCRIS Published: CMS HCRIS quarterly publication</a></li>
											<li role="presentation" class="active"><a href="http://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/dsh.html" target="_blank">SSI % Published: SSI % annual publication</a></li>
											<li role="presentation" class="active"><a href="http://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/Privacy/DUA_-_DSH.html" target="_blank">DUA Instruction: CMS DSH DUA instructions</a></li>
											<li role="presentation" class="active"><a href="http://www.ahd.com/" target="_blank">AHD: American Hospital Directory</a></li>
											<li role="presentation" class="active"><a href="https://login.wolterskluwer.com/auth/?resume=/idp/GHoPx/resumeSAML20/idp/SSO.ping&PF_TargetResource=https%3A%2F%2Fintelliconnect.cch.com%3A443%2Fscion%2Fauth%2Fstep2&WK_CPID=WKUS-NA-IC&WK_Force_Login=STANDARD" target="_blank">CCH: Health Law Information</a></li>
											<li role="presentation" class="active"><a href="http://www.regulations.gov/#!home" target="_blank">Federal Register: Federal Publication</a></li>
											<li role="presentation" class="active"><a href="http://www.pacer.gov/" target="_blank">PACER: Official Federal Court Case File Search Engine</a></li>
											<li role="presentation" class="active"><a href="https://www.ups.com/uis/create?loc=en_US&WT.svl=PNRO_L1" target="_blank">UPS: UPS Online Shipping</a></li>
											<li role="presentation" class="active"><a href="http://www.fedex.com/us/" target="_blank">FEDEX: FEDEX Online Shipping</a></li>
											<li role="presentation" class="active"><a href="https://www.microsoft.com/Licensing/servicecenter/default.aspx" target="_blank">Microsoft VLSC: Microsoft Volume Licensing Service Center</a></li>
											<li role="presentation" class="active"><a href="https://www.medi-cal.ca.gov/Eligibility/Login.asp" target="_blank">Medi-Cal: DHCS Medi-Cal Eligibility Verification</a></li>

										</ol>
									</div>

									{/* This is where we'll show the click count for the parent*/}
									{/* <h1>{this.state.clicks}</h1>*/}

								</div>
							</div>
						</div>
						</div>

					</div>

					{/*This represents the "Parent"*/}
					<div className="col-md-6">
						{/*Here we'll deploy the child component. We'll pass it the parent's click counter as a "state"*/}
						<Child clicks={this.state.clicks}/>
					</div>

				</div>

			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Parent;