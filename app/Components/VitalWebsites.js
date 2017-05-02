// Include React 
var React = require('react');

// Create the GrandChild Component
var VitalWebsites = React.createClass({

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
				<div className="panel-heading" style={{color: 'white',background: 'skyblue'}}>
					<h3 className="panel-title text-center" style={{fontSize: '20px'}}><b>Vital Websites</b></h3>
				</div>

					<div className="row">
						<div className="col-md-12">
							<div className="panel-body text-left" style={{color: 'white',background: 'steelblue'}}>
								<div className="panel" style={{color: 'white',background: 'steelblue'}}>
									<p  style={{color: 'white'}}>Updated 03/20/2017 12:55pm</p>
										<div className="panel">
											{/*<ul className="nav nav-pills nav-stacked">
												<li role="presentation" className="active"><a href="/child">Templates</a></li>
												<li role="presentation" className="active"><a href="/child2">Contacts</a></li>
											</ul>*/}
											</div>
												<ol class="nav nav-pills nav-stacked"  style={{color: 'white',fontSize: '18px'}}>
													<li role="presentation" className="active"><a href="http://13.92.252.199:9090/HCRISWeb/login.jsp" target="_blank" style={{color: '#e6f5ff'}}>Ontash HCRIS: Online HCRIS & marketing resources</a></li>
													<li role="presentation" className="active"><a href="https://www.costreportdata.com/worksheet_formats.html" target="_blank" style={{color: '#e6f5ff'}}>Cost Report Data: Online HCRIS & Worksheet Samples</a></li>
													<li role="presentation" className="active"><a href="https://hcris.hfssoft.com/iFrame/Login/iLogin.aspx" target="_blank" style={{color: '#e6f5ff'}}>HFS: Online Subscription HCRIS Database</a></li>
													<li role="presentation" className="active"><a href="http://www.ahd.com/" target="_blank" style={{color: '#e6f5ff'}}>AHD: American Hospital Directory</a></li>
													<li role="presentation" className="active"><a href="http://www.qualityreimbursement.com/" target="_blank" style={{color: '#e6f5ff'}}>QRS Home Page: QRS home page</a></li>
													<li role="presentation" className="active"><a href="http://secure.qualityreimbursement.com/" target="_blank" style={{color: '#e6f5ff'}}>QRS Secure Website: Hosted online secure file sharing account access</a></li>
													<li role="presentation" className="active"><a href="https://qualityreimburse.sugarondemand.com/index.php?action=Login&module=Users" target="_blank" style={{color: '#e6f5ff'}}>Sugar CRM: Online Customer Relation Management Database</a></li>		
													<li role="presentation" className="active"><a href="https://www.mykplan.com/participantsecure_net/login.aspx" target="_blank" style={{color: '#e6f5ff'}}>ADP 401K: QRS online ADP 401K account access.</a></li>		
													<li role="presentation" className="active"><a href="https://smb.att.com/olam/loginAction.olamexecute" target="_blank" style={{color: '#e6f5ff'}}>AT&T Uverse Small Business: Online Account Manager</a></li>
													<li role="presentation" className="active"><a href="https://login.luminate.com/login?.src=smbiz&.done=https%3A%2F%2Fwww.luminate.com%2Fservices%3F_ga%3D1.242949826.1137720605.1466816702%26authRedirect%3Dtrue&_ga=1.242949826.1137720605.1466816702" target="_blank" style={{color: '#e6f5ff'}}>Aabaco: Aabaco Small Business Domain and Email</a></li>
													<li role="presentation" className="active"><a href="https://www.cbeyondonline.net/cbo/cbol/index.html" target="_blank" style={{color: '#e6f5ff'}}>Cbeyond: QRS T1 internet & phone carrier online account access</a></li>		
													<li role="presentation" className="active"><a href="http://cp.fonality.com/" target="_blank" style={{color: '#e6f5ff'}}>Fonality: QRS business phone system online user account access</a></li>		
													<li role="presentation" className="active"><a href="https://www.mykmbs.com/mykmbs/login.jspx" target="_blank" style={{color: '#e6f5ff'}}>Konica Minolta: Copier online account access for supply and service order</a></li>		
													<li role="presentation" className="active"><a href="http://www.gotomeeting.com/" target="_blank" style={{color: '#e6f5ff'}}>Gotomeeting: Conference call online access to join or to host a meeting</a></li>
													<li role="presentation" className="active"><a href="http://ra.emdeon.com/" target="_blank" style={{color: '#e6f5ff'}}>Emdeon: Eligibility verification online account access</a></li>		
													<li role="presentation" className="active"><a href="http://www.govdataservices.com/" target="_blank" style={{color: '#e6f5ff'}}>GDS: Eligibility verification online account access</a></li>
													<li role="presentation" className="active"><a href="http://www.cms.gov/Research-Statistics-Data-and-Systems/Files-for-Order/CostReports/index.html" target="_blank" style={{color: '#e6f5ff'}}>HCRIS Published: CMS HCRIS quarterly publication</a></li>
													<li role="presentation" className="active"><a href="http://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/dsh.html" target="_blank" style={{color: '#e6f5ff'}}>SSI % Published: SSI % annual publication</a></li>
													<li role="presentation" className="active"><a href="http://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/Privacy/DUA_-_DSH.html" target="_blank" style={{color: '#e6f5ff'}}>DUA Instruction: CMS DSH DUA instructions</a></li>
													<li role="presentation" className="active"><a href="https://login.wolterskluwer.com/auth/?resume=/idp/GHoPx/resumeSAML20/idp/SSO.ping&PF_TargetResource=https%3A%2F%2Fintelliconnect.cch.com%3A443%2Fscion%2Fauth%2Fstep2&WK_CPID=WKUS-NA-IC&WK_Force_Login=STANDARD" target="_blank" style={{color: '#e6f5ff'}}>CCH: Health Law Information</a></li>
													<li role="presentation" className="active"><a href="http://www.regulations.gov/#!home" target="_blank" style={{color: '#e6f5ff'}}>Federal Register: Federal Publication</a></li>
													<li role="presentation" className="active"><a href="http://www.pacer.gov/" target="_blank" style={{color: '#e6f5ff'}}>PACER: Official Federal Court Case File Search Engine</a></li>
													<li role="presentation" className="active"><a href="https://www.ups.com/uis/create?loc=en_US&WT.svl=PNRO_L1" target="_blank" style={{color: '#e6f5ff'}}>UPS: UPS Online Shipping</a></li>
													<li role="presentation" className="active"><a href="http://www.fedex.com/us/" target="_blank" style={{color: '#e6f5ff'}}>FEDEX: FEDEX Online Shipping</a></li>
													<li role="presentation" className="active"><a href="https://www.microsoft.com/Licensing/servicecenter/default.aspx" target="_blank" style={{color: '#e6f5ff'}}>Microsoft VLSC: Microsoft Volume Licensing Service Center</a></li>
													<li role="presentation" className="active"><a href="https://www.medi-cal.ca.gov/Eligibility/Login.asp" target="_blank" style={{color: '#e6f5ff'}}>Medi-Cal: DHCS Medi-Cal Eligibility Verification</a></li>
														
												</ol>
											</div>

											{/* This is where we'll show the click count for the parent*/}
											{/* <h1>{this.state.clicks}</h1>*/}
										</div>
									</div>
								</div>
							</div>

						)
			}

});

module.exports = VitalWebsites