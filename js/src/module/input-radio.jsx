var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var InputRadio = React.createClass({

	handleChange: function(id, val)
	{
		//var x = e.target;
		console.log(id);
		console.log(val);

	},

	render: function () {
		return (
			<div>
				{this.props.answers.map(function(a) {
					return(
						<Input type='radio' label={a.label} name={this.props.qid} value={a.val} readOnly onChange={this.handleChange.bind(this, this.props.qid, a.val)} />
					)
				}.bind(this))}
			</div>
		)
	}

});

module.exports = InputRadio;