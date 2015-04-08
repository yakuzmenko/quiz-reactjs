var React = require('react');

var HelloMessage = require('./module/hello');

React.render(
<HelloMessage name="John" />,
	document.getElementById('container')
);