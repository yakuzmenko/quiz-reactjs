var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var InputText = React.createClass({displayName: "InputText",

	render: function () {
		return (
			React.createElement(Input, {type: "text", placeholder: (this.props.placeholder != undefined && this.props.placeholder !== true) ? this.props.placeholder : 'Enter answer'})
		)
	}

});

module.exports = InputText;