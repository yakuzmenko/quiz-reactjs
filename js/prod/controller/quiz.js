var Data = require('../store/data');

module.exports = {

	handleResult: function(id, val, type, checked)
	{
		var results = Data.getAnswers(),
			prevResult = Data.getAnswer(id, results),
			result;

		if ('checkbox' == type) {

			result = { qid: id, answer: [val] };

			if (!prevResult) {

				Data.setAnswer(result, results);

			} else {

				(checked) ? Data.setAnswer(val, prevResult.answer) : Data.removeAnswer(val, prevResult.answer);

			}

		} else {

			result = { qid: id, answer: val };

			if (!prevResult) {

				Data.setAnswer(result, results);

			} else {

				Data.removeAnswer(prevResult, results);
				Data.setAnswer(result, results);

			}
		}

		console.log(results);
	},

	getInitialQuestions: function()
	{
		return Data.initialData;
	},

	getRandomQuestions: function()
	{
		return Data.questions;
	},

	getAnswers: function()
	{
		return Data.answers;
	},

	randomizeQuestions: function(n)
	{
		return Data.randomizeQuestions(n);
	}

};
