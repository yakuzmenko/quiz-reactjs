var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var InputCheckbox = React.createClass({displayName: "InputCheckbox",

	render: function () {
		return (
			React.createElement("div", null, 
				this.props.answers.map(function(a) {
					return(
						React.createElement(Input, {type: "checkbox", label: a.label, name: this.props.qid, value: a.val, readOnly: true})
					)
				}.bind(this))
			)
		)
	}

});

module.exports = InputCheckbox;