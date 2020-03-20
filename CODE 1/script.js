//Coding Challenge

function Question(question, answer, correctAnswer){
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion= function(){
    console.log(this.question);

    for(var i=0; i<this.answer.length;i++){
        console.log(i + ' '+ this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correctAnswer){
        console.log('correct answer');
    }
    else{
        console.log('wrong answer try again!\nRefresh Page for new question');
    }
}
var question1 = new Question('What is the name of developer of the this program?',['Zinnia','Jane','None'],0);
var question2 = new Question('Is Javascript Awesome?', ['Yes','No'],0);
var question3 = new Question('Are you a Developer?',['Yes','No'],1);

var questions = [question1,question2,question3];

var randomNumber = Math.floor(Math.random()*questions.length);

questions[randomNumber].displayQuestion();


var result = parseInt(prompt('Open console for question\nPlease enter the answer option number!'));

questions[randomNumber].checkAnswer(result);