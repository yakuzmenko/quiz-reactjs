var Data = require('../model/data');

module.exports = {

	handleResult: function(id, val, type, checked)
	{
		var results = Data.getItems(),
			prevResult = Data.getItem(id, results),
			result;

		if ('checkbox' == type) {

			result = { qid: id, answer: [val] };

			if (!prevResult) {

				Data.setItem(result, results);

			} else {

				(checked) ? Data.setItem(val, prevResult.answer) : Data.removeItem(val, prevResult.answer);

			}

		} else {

			result = { qid: id, answer: val };

			if (!prevResult) {

				Data.setItem(result, results);

			} else {

				Data.removeItem(prevResult, results);
				Data.setItem(result, results);

			}
		}

		console.log(results);
	},

	getInitialQuestions: function()
	{
		return Data.initialData;
	},

	getRandomQuestions: function(n)
	{
		var data = this.getInitialQuestions(),
			questions = [],
			i = 0;

		while (i < n)
		{
			var question = data[Math.floor(Math.random()*data.length)];

			if (questions.length > 0) {
				if ( this.isQuestionExist(question.qid, 'qid', questions) ) { continue; }
				questions.push(question);
				i++;
			} else {
				questions.push(question);
				i++;
			}

		}

		return questions;
	},

	isQuestionExist: function(val, prop, array)
	{
		for (var i=0; i < array.length; i++) {
			if (array[i][prop] === val) {
				return true;
			}
		}

		return false;
	}
};
