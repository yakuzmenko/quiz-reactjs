var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var InputRadio = React.createClass({displayName: "InputRadio",

	handleChange: function(id, val)
	{
		//var x = e.target;
		console.log(id);
		console.log(val);

	},

	render: function () {
		return (
			React.createElement("div", null, 
				this.props.answers.map(function(a) {
					return(
						React.createElement(Input, {type: "radio", label: a.label, name: this.props.qid, value: a.val, readOnly: true, onChange: this.handleChange.bind(this, this.props.qid, a.val)})
					)
				}.bind(this))
			)
		)
	}

});

module.exports = InputRadio;