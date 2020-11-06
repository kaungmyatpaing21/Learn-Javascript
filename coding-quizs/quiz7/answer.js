var setQuestions = false;
var questions = [];
var score = 0;

var Question = function(question, answer, correctAnswer){
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

function checkAnswer(answer, correctAnswer){
    if (answer == correctAnswer){
        score++;
        console.log('correct!');
        console.log('Your score is ' + score);
        init();
    }else if (answer === 'exit'){

    }
    else{
        console.log('Incorrect and Try Again x\')');
        init();
    }
}

function init(){
    if(!setQuestions){
        var question1 = new Question('Is javascript the coolest language in the world?', ['Yes', 'No'], 0);
        var question2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
        var question3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
        questions = [question1, question2, question3];
        setQuestions = true;
    }

    var randNumber = Math.floor(Math.random() * 3);
    console.log(questions[randNumber].question);

    var answerSet = questions[randNumber].answer;
    for(var i = 0; i < answerSet.length; i++){
        console.log(i + '. ' + answerSet[i]);
    }

    var answer = prompt('Please select the correct answer(Just type the number)');
    checkAnswer(answer, questions[randNumber].correctAnswer)
}

init();




