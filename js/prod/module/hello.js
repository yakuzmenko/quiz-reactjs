var React = require('react');
var Alert = require('react-bootstrap/lib/Alert');



module.exports = React.createClass({displayName: "exports",

	getInitialState: function() {
		return {
			alertVisible: true
		};
	},

	render: function() {
		if (this.state.alertVisible) {
			return (
				React.createElement(Alert, {bsStyle: "warning", onDismiss: this.handleAlertDismiss}, 
					React.createElement("strong", null, "Holy Hello ", this.props.name), " Best check yo self, you're not looking too good."
				)
			);
		} else {
			return null;
		}
	},

	handleAlertDismiss: function() {
		this.setState({alertVisible: false});
	}
});