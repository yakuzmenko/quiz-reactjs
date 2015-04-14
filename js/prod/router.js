var React = require('react')

var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

//var HelloMessage = require('./module/hello');
//React.render(<HelloMessage name="John" />, document.getElementById('container'));

var Index = require('./index');
var Quiz = require('./page/quiz');
var Result = require('./page/result');


var routes = (
	React.createElement(Route, {handler: Index, path: "/"}, 
		React.createElement(DefaultRoute, {handler: Quiz}), 
		React.createElement(Route, {name: "result", handler: Result})
	)
);

Router.run(routes, function (Handler) {
	React.render(React.createElement(Handler, null), document.getElementById('container'));
});
