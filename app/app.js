// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Parent = require('./Components/Parent')
// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(

	<Parent />,
	document.getElementById('app')
)

$.getJSON('/Numbers', function(data) {
  // for each one
  for (var i = 0; i<data.length; i++){
    // display the apropos information on the page
    $('#Numbers').append('<p> data-id="' + data[i]._id + '">'+ data[i].FirstName + '<br />'+ data[i].LastName + data[i].OfficeExtension + data[i].MobileExtension + data[i].MobileNumber + data[i].Email + '</p>');
  }
});