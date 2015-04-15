var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var QuizController = require('../controller/quiz');

var InputText = React.createClass({displayName: "InputText",

	getInitialState: function() {
		return {
			value: ''
		};
	},

	handleChange: function(id)
	{
		var val = this.refs.input.getValue();

		this.setState({ value: val });

		console.log(id, val, this.state.value, this.refs.input.getValue());

		QuizController.handleResult(id, val, 'text');
	},

	render: function ()
	{
		var placeholder = this.props.placeholder,
			qid = this.props.name,
			val = this.state.value;

		return (
			React.createElement(Input, {
				type: "text", 
				ref: "input", 
				name: qid, 
				value: val, 
				placeholder:  (placeholder != undefined && placeholder !== true) ? placeholder : 'Enter answer', 
				onChange: this.handleChange.bind(this, qid)})
		)
	}

});

module.exports = InputText;