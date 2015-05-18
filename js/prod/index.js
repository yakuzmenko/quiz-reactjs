var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({displayName: "exports",

	render: function()
	{
		return (
			React.createElement("div", null, 
				React.createElement(RouteHandler, null)
			)
		)
	}

});