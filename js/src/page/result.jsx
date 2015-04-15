var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	Button = require('react-bootstrap/lib/Button');

var QuizController = require('../controller/quiz');

var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

	render: function()
	{
		var questions = QuizController.getRandomQuestions();
		var answers = QuizController.getAnswers();

		return (
			<div className="questionContainer">
				<h1>Results</h1>
				<div>
					{console.log(questions)}
					{console.log(answers)}
					<Button>
						<Link to='quiz'>Back to Quiz</Link>
					</Button>
				</div>
			</div>
		)
	}

});