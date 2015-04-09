var React = require('react'),
	Panel = require('react-bootstrap/lib/Panel'),
	ListGroup = require('react-bootstrap/lib/ListGroup'),
	ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var InputText = require('./input-text'),
	InputRadio = require('./input-radio'),
	InputCheckbox = require('./input-checkbox');

var Question = React.createClass({

	render: function() {

		var data = this.props.data,
			type = data.type,
			input,
			style;

		switch (type) {
			case 'text':
				input = <InputText />;
				style = 'warning';
				break;
			case 'radio':
				input = <InputRadio answers={data.answers} qid={data.qid} />;
				style = 'info';
				break;
			case 'checkbox':
				input = <InputCheckbox answers={data.answers} qid={data.qid} />;
				style = 'success';
				break;
		}

		return (
			<Panel header={'Question #' + this.props.index} bsStyle={style}>
				{data.question}
				<ListGroup fill>
					<ListGroupItem>
						{input}
					</ListGroupItem>
				</ListGroup>
			</Panel>
		);
	}

});

module.exports = Question;