var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel');

var QuestionController = require('../controller/question');

var Question = require('./question');

var QuestionContainer = React.createClass({

	questionNumber: 10,

	render: function()
	{
		var questions = QuestionController.getRandomQuestions(this.questionNumber);

		return(
			<div className="questionContainer">
				<h1>Questions</h1>
				<form>
					{questions.map(function(q,i) {
						return (
							<Question index={++i} data={q}/>
						);
					})}
				</form>
			</div>
		);
	}

});

module.exports = QuestionContainer;