var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var QuizController = require('../controller/quiz');

var InputRadio = React.createClass({displayName: "InputRadio",

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
			React.createElement(Input, {
				type: "radio", 
				ref: "input", 
				label: label, 
				name: qid, 
				value: val, 
				onChange: this.handleChange.bind(this, qid, val), 
				readOnly: true})
		)
	}

});

var RadioWrapper = React.createClass({displayName: "RadioWrapper",

	render: function ()
	{
		return (
			React.createElement("div", {className: "radioWrapper"}, 
				this.props.answers.map(function(a) {
					return(
						React.createElement(InputRadio, {label: a.label, name: this.props.qid, value: a.val})
					)
				}.bind(this))
			)
		)
	}

});

module.exports = RadioWrapper;