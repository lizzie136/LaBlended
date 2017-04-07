
require("./questions");
var Quiz = require("../vendors/quizlib").quizlib;
var createAnswersDiv = function (answers) {

  var div = document.createElement('div');
  var ul = document.createElement('ul');

  div.className = 'quizlib-question-answers';

  answers.forEach(function (answer, i) {

    var li = document.createElement('li');
    var label = document.createElement('label');
    var input = document.createElement('input');

    input.type = 'checkbox';
    input.name = 'q' + i;
    input.value = String.fromCharCode(97 + i);

    label.appendChild(input);

    label.innerHTML += ' ' + answer[0];

    li.appendChild(label);
    ul.appendChild(li);
  });

  div.appendChild(ul);

  return div;
};


var createQuestionDiv = function (question, i, max, ui) {

  var el = document.createElement('div');
  var title = document.createElement('div');
  var btn = document.createElement('button');

  btn.type = 'button';

  if (i === max - 1) {
    btn.innerHTML = 'Enviar';
  }
  else {
    btn.innerHTML = 'Siguiente';
  }

  btn.addEventListener('click', ui.handleClick);

  el.id = 'question-' + i;
  el.className = 'quizlib-question';
  title.className = 'quizlib-question-title';
  title.innerHTML = (i + 1) + '. ' + question.title;

  el.appendChild(title);
  el.appendChild(createAnswersDiv(question.answers));
  el.appendChild(btn);

  return el;
};


var createQuizDiv = function (questions) {

  var container = document.createElement('div');
  container.id = 'quiz-div';
  return container;
};


var createUI = function (id, questions) {

  var result = localStorage.getItem(id);
  if (result) {
    console.log(JSON.parse(result));
  }


  var ui = {
    currentQuestion: 0,
    quiz: createQuizDiv(questions, 0),
    handleClick: function (e) {

      var questionDiv = e.currentTarget.parentNode;
      var questionIdx = parseInt(questionDiv.id.split('-')[1]);

      if (questionIdx < questions.length - 1) {
        return ui.next();
      }

      quiz.checkAnswers(false);

      localStorage.setItem(id, JSON.stringify(quiz.result));

      console.log(quiz.result, id);

      alert([
        'Respuestas correctas: ' + quiz.result.score + '/' + quiz.result.totalQuestions,
        'Porcentaje correcto: ' + quiz.result.scorePercentFormatted + '%'
      ].join('\n'));
    },
    next: function () {

      this.currentQuestion++;
      this.render();
    },
    prev: function () {

      this.currentQuestion--;
      this.render();
    },
    render: function () {

      var questionDivs = document.querySelectorAll('.quizlib-question');

      for (var i = 0; i < questionDivs.length; i++) {
        if (i === ui.currentQuestion) {
          questionDivs[i].style.display = 'block';
        }
        else {
          questionDivs[i].style.display = 'none';
        }
      }
    }
  };


  questions.forEach(function (question, i) {

    ui.quiz.appendChild(createQuestionDiv(question, i, questions.length, ui));
  });


  //document.body.appendChild(ui.quiz);
  var container = document.getElementById("content");
  container.innerHTML = "";
  container.appendChild(ui.quiz);

  var quiz = new Quiz(ui.quiz.id, questions.map(function (question) {

    return question.answers.reduce(function (memo, answer, i) {

      if (answer[1] !== true) {
        return memo;
      }

      if (!memo) {
        return String.fromCharCode(97 + i);
      }
      else if (!memo.push) {
        return [memo, String.fromCharCode(97 + i)];
      }

      memo.push(String.fromCharCode(97 + i))

      return memo;
    }, null);
  }));


  ui.render();
};


module.exports = {
    quiz: createUI
};
