var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	Button = require('react-bootstrap/lib/Button');

var QuizController = require('../controller/quiz');

var Question = require('../module/question');
var Timer = require('../module/timer');

var Router = require('react-router');
var Link = Router.Link;

var QuestionContainer = React.createClass({displayName: "QuestionContainer",

	questionNumber: 10,

	render: function()
	{
		var questions = QuizController.randomizeQuestions(this.questionNumber);

		return(
			React.createElement("div", {className: "questionContainer"}, 
				React.createElement(Timer, null), 
				React.createElement("h1", null, "Questions"), 
				React.createElement("form", null, 
					questions.map(function(q,i) {
						return (
							React.createElement(Question, {index: ++i, data: q})
						);
					}), 
					React.createElement(Button, {className: "submitQuiz"}, 
						React.createElement(Link, {to: "result"}, "Submit")
					)
				)
			)
		);
	}

});

module.exports = QuestionContainer;