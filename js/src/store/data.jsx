module.exports = {

	answers: [],
	
	questions: [],

	initialData: [
		{
			question: 'Question text1',
			qid: '1',
			type: 'text',
			correct: 'qwerty'
		},
		{
			question: 'Question text2',
			qid: '2',
			type: 'checkbox',
			answers: [
				{
					label: 'Label1',
					val: '1'
				},
				{
					label: 'Label2',
					val: '2'
				},
				{
					label: 'Label3',
					val: '3'
				}
			]

		},
		{
			question: 'Inside which HTML element do we put the JavaScript?',
			qid: '3',
			type: 'radio',
			answers: [
				{
					label: '<scripting>',
					val: '1'
				},
				{
					label: '<js>',
					val: '2'
				},
				{
					label: '<script>',
					val: '3',
					correct: '1'
				},
				{
					label: '<javascript>',
					val: '4'
				}
			]

		},
		{
			question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
			qid: '4',
			type: 'radio',
			answers: [
				{
					label: 'document.getElementByName("p").innerHTML = "Hello World!";',
					val: '1'
				},
				{
					label: 'document.getElement("p").innerHTML = "Hello World!";',
					val: '2'
				},
				{
					label: 'document.getElementById("demo").innerHTML = "Hello World!";',
					val: '3',
					correct: '1'
				},
				{
					label: '#demo.innerHTML = "Hello World!";',
					val: '4'
				}
			]
		},
		{
			question: 'Where is the correct place to insert a JavaScript?',
			qid: '5',
			type: 'checkbox',
			answers: [
				{
					label: 'In the <head> section',
					val: '1',
					correct: '1'
				},
				{
					label: 'After the <head> section',
					val: '2'

				},
				{
					label: 'In the <body> section',
					val: '3',
					correct: '1'
				},
				{
					label: 'Aftet the <body> section',
					val: '4'
				}
			]
		},
		{
			question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
			qid: '6',
			type: 'radio',
			answers: [
				{
					label: '<script name="xxx.js">',
					val: '1'
				},
				{
					label: '<script href="xxx.js">',
					val: '2'
				},
				{
					label: '<script src="xxx.js">',
					val: '3',
					correct: '1'
				}
			]
		},
		{
			question: 'The external JavaScript file must contain the <script> tag.',
			qid: '7',
			type: 'radio',
			answers: [
				{
					label: 'False',
					val: '1',
					correct: '1'
				},
				{
					label: 'True',
					val: '2'
				}
			]
		},
		{
			question: 'How do you write message "Hello World" in an popup box?',
			qid: '8',
			type: 'checkbox',
			answers: [
				{
					label: 'alert("Hello World");',
					val: '1',
					correct: '1'
				},
				{
					label: 'confirm("Hello World");',
					val: '2',
					correct: '1'
				},
				{
					label: 'msgBox("Hello World");',
					val: '3'
				},
				{
					label: 'prompt("Hello World");',
					val: '4'
				}
			]
		},
		{
			question: 'How do you write "Hello World" in an alert box?',
			qid: '9',
			type: 'checkbox',
			answers: [
				{
					label: 'alert("Hello World");',
					val: '1',
					correct: '1'
				},
				{
					label: 'alertBox("Hello World");',
					val: '2'
				},
				{
					label: 'msgBox("Hello World");',
					val: '3'
				},
				{
					label: 'window.alert("Hello World");',
					val: '4',
					correct: '1'
				}
			]
		},
		{
			question: 'How do you create a function in JavaScript?',
			qid: '10',
			type: 'checkbox',
			answers: [
				{
					label: 'function myFunction()',
					val: '1',
					correct: '1'
				},
				{
					label: 'function:myFunction()',
					val: '2'
				},
				{
					label: 'function = myFunction()',
					val: '3'
				},
				{
					label: 'var myFunction = function()',
					val: '4',
					correct: '1'
				},
				{
					label: 'var myFunction = new Function()',
					val: '5',
					correct: '1'
				}
			]
		},
		{
			question: 'How do you call a function named "myFunction"?',
			qid: '11',
			type: 'radio',
			answers: [
				{
					label: 'myFunction()',
					val: '1',
					correct: '1'
				},
				{
					label: 'call function myFunction()',
					val: '2'
				},
				{
					label: 'call myFunction()',
					val: '3'
				}
			]
		},
		{
			question: 'How to write an IF statement in JavaScript?',
			qid: '12',
			type: 'radio',
			answers: [
				{
					label: 'if i = 5',
					val: '1'
				},
				{
					label: 'if i == 5 then',
					val: '2'
				},
				{
					label: 'if (i == 5)',
					val: '3',
					correct: '1'
				},
				{
					label: 'if i = 5 then',
					val: '4'
				}
			]
		},
		{
			question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
			qid: '13',
			type: 'checkbox',
			answers: [
				{
					label: 'if (i != 5)',
					val: '1',
					correct: '1'
				},
				{
					label: 'if (i =! 5)',
					val: '2'
				},
				{
					label: 'if (i !== 5)',
					val: '3',
					correct: '1'
				},
				{
					label: 'if (i <> 5)',
					val: '4'
				}
			]
		},
		{
			question: 'How does a WHILE loop start?',
			qid: '14',
			type: 'radio',
			answers: [
				{
					label: 'while i = 1 to 10',
					val: '1'
				},
				{
					label: 'while (i <= 10)',
					val: '2',
					correct: '1'
				},
				{
					label: 'while (i <= 10; i++)',
					val: '3'
				}
			]
		},
		{
			question: 'How does a FOR loop start?',
			qid: '15',
			type: 'radio',
			answers: [
				{
					label: 'for i = 1 to 5',
					val: '1'
				},
				{
					label: 'for (i <= 5; i++)',
					val: '2'
				},
				{
					label: 'for (i = 0; i <= 5)',
					val: '3'
				},
				{
					label: 'for (i = 0; i <= 5; i++)',
					val: '3',
					correct: '1'
				}
			]
		},
		{
			question: 'How can you add a comment in a JavaScript?',
			qid: '16',
			type: 'checkbox',
			answers: [
				{
					label: '<!--This is a comment-->',
					val: '1'
				},
				{
					label: '\'This is a comment',
					val: '2'
				},
				{
					label: '//This is a comment',
					val: '3',
					correct: '1'
				},
				{
					label: '/*This is a comment*/',
					val: '4',
					correct: '1'
				}
			]
		},
		{
			question: 'How to insert a comment that has more than one line?',
			qid: '17',
			type: 'radio',
			answers: [
				{
					label: '//This comment has more than one line//',
					val: '1'
				},
				{
					label: '/*This comment has more than one line*/',
					val: '2',
					correct: '1'
				},
				{
					label: '<!--This comment has more than one line-->',
					val: '3'
				}
			]
		},
		{
			question: 'What is the correct way to write a JavaScript array?',
			qid: '18',
			type: 'checkbox',
			answers: [
				{
					label: 'var colors = "red", "green", "blue"',
					val: '1'
				},
				{
					label: 'var colors = new Array("red", "green", "blue")',
					val: '2',
					correct: '1'
				},
				{
					label: 'var colors = (1:"red", 2:"green", 3:"blue")',
					val: '3'
				},
				{
					label: 'var colors = ["red", "green", "blue"]',
					val: '4',
					correct: '1'
				}
			]
		},
		{
			question: 'How do you round the number 7.25, to the nearest integer?',
			qid: '19',
			type: 'radio',
			answers: [
				{
					label: 'rnd(7.25)',
					val: '1'
				},
				{
					label: 'round(7.25)',
					val: '2'
				},
				{
					label: 'Math.rnd(7.25)',
					val: '3'
				},
				{
					label: 'Math.round(7.25)',
					val: '4',
					correct: '1'
				}
			]
		},
		{
			question: 'How do you find the number with the highest value of x and y?',
			qid: '20',
			type: 'radio',
			answers: [
				{
					label: 'top(x, y)',
					val: '1'
				},
				{
					label: 'Math.ceil(x, y)',
					val: '2'
				},
				{
					label: 'ceil(x, y)',
					val: '3'
				},
				{
					label: 'Math.max(x, y)',
					val: '4',
					correct: '1'
				}
			]
		},
		{
			question: 'What is the correct JavaScript syntax for opening a new window called "w2"?',
			qid: '21',
			type: 'radio',
			answers: [
				{
					label: 'w2 = window.open("http://www.w3schools.com");',
					val: '1',
					correct: '1'
				},
				{
					label: 'w2 = window.new("http://www.w3schools.com");',
					val: '2'
				}
			]
		},
		{
			question: 'JavaScript is the same as Java.',
			qid: '22',
			type: 'radio',
			answers: [
				{
					label: 'True',
					val: '1'
				},
				{
					label: 'False',
					val: '2',
					correct: '1'
				}
			]
		},
		{
			question: 'How can you detect the client\'s browser name?',
			qid: '23',
			type: 'radio',
			answers: [
				{
					label: 'navigator.appName',
					val: '1',
					correct: '1'
				},
				{
					label: 'browser.name',
					val: '2'
				},
				{
					label: 'client.navName',
					val: '3'
				}
			]
		}
	],

	getAnswers: function()
	{
		return this.answers;
	},

	getAnswer: function(id, array)
	{
		if (array.length > 0) {
			for (var i = 0; i < array.length; i++) {
				if (array[i].qid === id) {
					return array[i];
				}
			}
		}

		return false;
	},

	setAnswer: function(item, array)
	{
		array.push(item);

		return array;
	},

	removeAnswer: function(item, array)
	{
		var index = array.indexOf(item);

		if (~index) {
			array.splice(index, 1);
		}

		return array;
	},

	randomizeQuestions: function(n)
	{
		var data = this.initialData,
			questions = this.questions,
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