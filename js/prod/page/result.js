var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	Button = require('react-bootstrap/lib/Button');

var QuizController = require('../controller/quiz');

var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({displayName: "exports",

	render: function()
	{
		var questions = QuizController.getRandomQuestions();
		var answers = QuizController.getAnswers();

		return (
			React.createElement("div", {className: "questionContainer"}, 
				React.createElement("h1", null, "Results"), 
				React.createElement("div", null, 
					console.log(questions), 
					console.log(answers), 
					React.createElement(Button, null, 
						React.createElement(Link, {to: "quiz"}, "Back to Quiz")
					)
				)
			)
		)
	}

});