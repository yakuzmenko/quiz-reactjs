var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Index = require('./index');
var Quiz = require('./page/quiz');
var Result = require('./page/result');

var routes = (
	React.createElement(Route, {handler: Index, path: "/"}, 
		React.createElement(DefaultRoute, {name: "quiz", handler: Quiz}), 
		React.createElement(Route, {name: "result", handler: Result})
	)
);

Router.run(routes, function (Handler) {
	React.render(React.createElement(Handler, null), document.getElementById('container'));
});