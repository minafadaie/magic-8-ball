$(document).ready(function(){

var magic8Ball = {};
magic8Ball.userQuestion;
magic8Ball.listOfAnswers = ["It is certain", "Ask again later", "Don't count on it"];
magic8Ball.selectAnswer = function(userQuestion)
{
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomNumberRounded = Math.floor(randomNumberArray);
	var randomAnswer = this.listOfAnswers[randomNumberRounded];
	$("#answer").text(randomAnswer);
	
	console.log(userQuestion);
	console.log(randomAnswer);
};


	
var activatePrompt = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
       function() {
           var userQuestion = prompt("What is your y/n  question?");
		   $("#8ball").effect( "shake" );
           magic8Ball.selectAnswer(userQuestion)
       }, 500);
};
	
$("#questionButton").click(activatePrompt);
	
});  