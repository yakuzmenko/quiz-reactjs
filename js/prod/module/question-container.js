var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel');

var QuestionController = require('../controller/question');

var Question = require('./question');

var QuestionContainer = React.createClass({displayName: "QuestionContainer",

	questionNumber: 10,

	render: function()
	{
		var questions = QuestionController.getRandomQuestions(this.questionNumber);

		return(
			React.createElement("div", {className: "questionContainer"}, 
				React.createElement("h1", null, "Questions"), 
				React.createElement("form", null, 
					questions.map(function(q,i) {
						return (
							React.createElement(Question, {index: ++i, data: q})
						);
					})
				)
			)
		);
	}

});

module.exports = QuestionContainer;