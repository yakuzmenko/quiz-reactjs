var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Index = require('./index');
var Quiz = require('./page/quiz');
var Result = require('./page/result');

var routes = (
	<Route handler={Index} path="/">
		<DefaultRoute name="quiz" handler={Quiz} />
		<Route name="result" handler={Result} />
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('container'));
});