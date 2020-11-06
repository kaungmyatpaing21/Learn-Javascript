(function(){
    var Question = function(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ": " + this.answers[i]);
        }
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('--------------------------------------------');
    }
    
    Question.prototype.checkAnswer = function(answer, callback){
        var sc;
        if(answer === this.correctAnswer){
            console.log('Correct!');
            sc = callback(true);
            
        }else{
            console.log('Incorrect and Try Again x\')');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    var q1 = new Question('Is javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('Who is the teacher of this course?', ['Mike', 'Jane', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
    var questions = [q1, q2, q3];
    
    function nextQuestion(){
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();