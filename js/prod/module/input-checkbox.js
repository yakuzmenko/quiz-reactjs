var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var QuizController = require('../controller/quiz');

var InputCheckbox = React.createClass({displayName: "InputCheckbox",

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
			React.createElement(Input, {
				type: "checkbox", 
				ref: "input", 
				label: label, 
				name: qid, 
				value: val, 
				onChange: this.handleChange.bind(this, qid, val), 
				readOnly: true})
		)
	}

});

var CheckboxWrapper = React.createClass({displayName: "CheckboxWrapper",

	render: function ()
	{
		return (
			React.createElement("div", {className: "checkboxWrapper"}, 
				this.props.answers.map(function(a) {
					return(
						React.createElement(InputCheckbox, {label: a.label, name: this.props.qid, value: a.val})
					)
				}.bind(this))
			)
		)
	}

});

module.exports = CheckboxWrapper;