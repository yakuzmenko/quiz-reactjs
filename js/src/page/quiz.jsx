var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	Button = require('react-bootstrap/lib/Button');

var QuestionController = require('../controller/quiz');

var Question = require('../module/question');

var QuestionContainer = React.createClass({

	questionNumber: 10,

	handleSubmit: function()
	{
		window.location.href += 'result';
	},

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
					<Button onClick={this.handleSubmit}>Submit</Button>
				</form>
			</div>
		);
	}

});

module.exports = QuestionContainer;