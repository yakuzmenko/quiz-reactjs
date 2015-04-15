var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	Button = require('react-bootstrap/lib/Button');

var QuizController = require('../controller/quiz');

var Question = require('../module/question');

var Router = require('react-router');
var Link = Router.Link;

var QuestionContainer = React.createClass({

	questionNumber: 10,

	render: function()
	{
		var questions = QuizController.randomizeQuestions(this.questionNumber);

		return(
			<div className="questionContainer">
				<h1>Questions</h1>
				<form>
					{questions.map(function(q,i) {
						return (
							<Question index={++i} data={q}/>
						);
					})}
					<Button>
						<Link to='result'>Submit</Link>
					</Button>
				</form>
			</div>
		);
	}

});

module.exports = QuestionContainer;