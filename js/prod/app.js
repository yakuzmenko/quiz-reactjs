var React = require('react');

var HelloMessage = require('./module/hello');

React.render(
React.createElement(HelloMessage, {name: "John"}),
	document.getElementById('container')
);