var readlineSync = require('readline-sync');

var userName = readlineSync.question("May I know your name ? ");
console.log("Welcome "+ userName + " to, Do you know Sushmanth QUIZ?");
console.log("");
console.log("-------------------------------------------------------");
console.log("");

var score = 0;
console.log("Your current score is : " + score);
console.log("Let's begin the quiz")
function play(question,answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()) {

    console.log("You are right 🙂 ");
    score++;
    console.log("Current score : " + score +"\n");
  } else{
    console.log("You are wrong 😒");
    score--;
    console.log("Current score : " + score+"\n");
  }
}

play("What's my birth month ? ", "september");
play("What's my nick name ? ", "murari");
play("Where do I stay ? ", "Nellore");
play("What's my favourite chutney ? ", "groundnut");
play("what's my current mobile brand ? ","samsung");

console.log("Your final score is : ",score);
