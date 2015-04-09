var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var InputRadio = React.createClass({displayName: "InputRadio",

	render: function () {
		return (
			React.createElement("div", null, 
				this.props.answers.map(function(a) {
					return(
						React.createElement(Input, {type: "radio", label: a.label, name: this.props.qid, value: a.val, readOnly: true})
					)
				}.bind(this))
			)
		)
	}

});

module.exports = InputRadio;