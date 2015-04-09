var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	ListGroup = require('react-bootstrap/lib/ListGroup'),
	ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var InputText = require('./input-text'),
	InputRadio = require('./input-radio'),
	InputCheckbox = require('./input-checkbox');

var Question = React.createClass({displayName: "Question",

	render: function() {

		var data = this.props.data,
			type = data.type,
			input,
			style;

		switch (type) {
			case 'text':
				input = React.createElement(InputText, null);
				style = 'warning';
				break;
			case 'radio':
				input = React.createElement(InputRadio, {answers: data.answers, qid: data.qid});
				style = 'info';
				break;
			case 'checkbox':
				input = React.createElement(InputCheckbox, {answers: data.answers, qid: data.qid});
				style = 'success';
				break;
		}

		return (
			React.createElement(Panel, {header: 'Question #' + this.props.index, bsStyle: style}, 
				data.question, 
				React.createElement(ListGroup, {fill: true}, 
					React.createElement(ListGroupItem, null, 
						input
					)
				)
			)
		);
	}

});

module.exports = Question;