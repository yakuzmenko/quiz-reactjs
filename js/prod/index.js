var React = require('react');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({displayName: "exports",

	render: function()
	{
		return (
			React.createElement("div", null, 
			React.createElement(Link, {to: "result"}, "Link to result"), 
			React.createElement(RouteHandler, null)
			)
		)
	}

});