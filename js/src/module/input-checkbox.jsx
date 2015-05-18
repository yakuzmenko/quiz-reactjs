var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var QuizController = require('../controller/quiz');

var InputCheckbox = React.createClass({

	handleChange: function(id, val)
	{
		QuizController.handleResult(id, val, 'checkbox', this.refs.input.getChecked());
	},

	render: function ()
	{
		var label = this.props.label;
		var qid = this.props.name;
		var val = this.props.value;

		return(
			<Input
				type='checkbox'
				ref='input'
				label={label}
				name={qid}
				value={val}
				onChange={this.handleChange.bind(this, qid, val)}
				readOnly />
		)
	}

});

var CheckboxWrapper = React.createClass({

	render: function ()
	{
		return (
			<div className="checkboxWrapper">
				{this.props.answers.map(function(a) {
					return(
						<InputCheckbox label={a.label} name={this.props.qid} value={a.val} />
					)
				}.bind(this))}
			</div>
		)
	}

});

module.exports = CheckboxWrapper;