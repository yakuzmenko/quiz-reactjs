var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	Button = require('react-bootstrap/lib/Button');

var QuizController = require('../controller/quiz');

var Question = require('../module/question');

var QuestionContainer = React.createClass({displayName: "QuestionContainer",

	questionNumber: 10,

	handleSubmit: function()
	{
		window.location.href += 'result';
	},

	render: function()
	{
		var questions = QuizController.getRandomQuestions(this.questionNumber);

		return(
			React.createElement("div", {className: "questionContainer"}, 
				React.createElement("h1", null, "Questions"), 
				React.createElement("form", null, 
					questions.map(function(q,i) {
						return (
							React.createElement(Question, {index: ++i, data: q})
						);
					}), 
					React.createElement(Button, {onClick: this.handleSubmit}, "Submit")
				)
			)
		);
	}

});

module.exports = QuestionContainer;