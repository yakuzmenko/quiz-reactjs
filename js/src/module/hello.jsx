var React = require('react');
var Alert = require('react-bootstrap/lib/Alert');



module.exports = React.createClass({

	getInitialState: function() {
		return {
			alertVisible: true
		};
	},

	render: function() {
		if (this.state.alertVisible) {
			return (
				<Alert bsStyle='warning' onDismiss={this.handleAlertDismiss}>
					<strong>Holy Hello {this.props.name}</strong> Best check yo self, you're not looking too good.
				</Alert>
			);
		} else {
			return null;
		}
	},

	handleAlertDismiss: function() {
		this.setState({alertVisible: false});
	}
});