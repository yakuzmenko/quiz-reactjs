var React = require('react');

var Button = require('react-bootstrap/lib/Button'),
	Modal = require('react-bootstrap/lib/Modal'),
	OverlayMixin = require('react-bootstrap/lib/OverlayMixin');

var Timer = React.createClass({displayName: "Timer",

	mixins: [OverlayMixin],

	getInitialState: function()
	{
		return {
			secondsLeft: 60,
			isModalOpen: false
		};
	},

	handleToggle: function()
	{
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},

	tick: function()
	{
		if (this.state.secondsLeft > 0) {

			this.setState({secondsLeft: this.state.secondsLeft - 1});

		} else {

			this.handleToggle();
			clearInterval(this.interval);
		}
	},

	componentDidMount: function()
	{
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function()
	{
		clearInterval(this.interval);
	},

	render: function()
	{
		return (
			React.createElement("div", {className: "timer"}, "Seconds Left: ", this.state.secondsLeft)
		);
	},

	renderOverlay: function()
	{
		if (!this.state.isModalOpen) {
			return React.createElement("span", null);
		}

		return (
			React.createElement(Modal, {bsStyle: "primary", title: "Quiz complete!", onRequestHide: this.handleModal}, 
				React.createElement("div", {className: "modal-body"}, 
					React.createElement("b", null, "Your time is out! Click \"Next\" button to see results.")
				), 
				React.createElement("div", {className: "modal-footer"}, 
					React.createElement(Button, {onClick: this.handleModal}, "Next")
				)
			)
		);
	},

	handleModal: function()
	{
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});

		window.location.href += 'result';
	}

});

module.exports = Timer;