var React = require('react');

var Button = require('react-bootstrap/lib/Button'),
	Modal = require('react-bootstrap/lib/Modal'),
	OverlayMixin = require('react-bootstrap/lib/OverlayMixin');

var Timer = React.createClass({

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
			<div className="timer">Seconds Left: {this.state.secondsLeft}</div>
		);
	},

	renderOverlay: function()
	{
		if (!this.state.isModalOpen) {
			return <span/>;
		}

		return (
			<Modal bsStyle='primary' title='Quiz complete!' onRequestHide={this.handleModal}>
				<div className='modal-body'>
					<b>Your time is out! Click "Next" button to see results.</b>
				</div>
				<div className='modal-footer'>
					<Button onClick={this.handleModal}>Next</Button>
				</div>
			</Modal>
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