var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var InputRadio = React.createClass({

	render: function () {
		return (
			<div>
				{this.props.answers.map(function(a) {
					return(
						<Input type='radio' label={a.label} name={this.props.qid} value={a.val} readOnly />
					)
				}.bind(this))}
			</div>
		)
	}

});

module.exports = InputRadio;