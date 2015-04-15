var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var QuizController = require('../controller/quiz');

var InputRadio = React.createClass({

	handleChange: function(id, val)
	{
		QuizController.handleResult(id, val, 'radio');
	},

	render: function ()
	{
		var label = this.props.label;
		var qid = this.props.name;
		var val = this.props.value;

		return(
			<Input
				type='radio'
				ref='input'
				label={label}
				name={qid}
				value={val}
				onChange={this.handleChange.bind(this, qid, val)}
				readOnly />
		)
	}

});

var RadioWrapper = React.createClass({

	render: function ()
	{
		return (
			<div className="radioWrapper">
				{this.props.answers.map(function(a) {
					return(
						<InputRadio label={a.label} name={this.props.qid} value={a.val} />
					)
				}.bind(this))}
			</div>
		)
	}

});

module.exports = RadioWrapper;