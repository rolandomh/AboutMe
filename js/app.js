'use strict';

// QUESTION 1
var userName = prompt('what\'s your name?');
alert('Welcome, ' + userName);
console.log(userName);

// QUESTION 2
var Game = prompt('Do you want to play a game?');
if (Game === 'yes'){
  alert('Welcome to le game.');
}
else if (Game === 'no'){
  alert('Le Sigh.');
}


//QUESTION 3
var homeAnswer = prompt('am i at home?');
if(homeAnswer === 'yes'){
  alert('Great! Yes, I am at home.');
} else {
  alert('No, you are incorrect. Erroneous!');
}

// QUESTION 4
var question4 = prompt('Am I a princess?');
if(question4 === 'yes'){
  alert('You better believe it!');
} else if (question4 === 'no') {
  alert('Yes I is.');
}

// QUESTION 5
var question5 = prompt('Do I like to cook?');
if(question5 === 'yes'){
  alert('Yes and always');
} else if (question5 === 'no') {
  alert('You should come over for dinner, or lunch, or whatever.');
}

// QUESTION 6
// parseInt + function

var Answer = 10;
for(var i = 0; i < 4; i++){
  var question6 = prompt('How many Predator/Alien movies are there?');
  if (Number(question6) < Answer) {
    alert('A little higher');
  } else if (Number(question6) > Answer){
    alert('It\'s a number 1-10');
  } else if (Number(question6) === Answer){
    alert('We\'re both surprised! You got it right!');
    break;
  }
  if (i === 3){
    alert('The correct answer is 10.');
  }
}

// QUESTION 7 array, 6 attempts, end if correct or reached 7th attempt; favorite book

var Question7 = ['Covering', 'Wormwood', 'No God but God', 'The Fire Next Time', 'How to be an Antiracist', 'The Daily Stoic', 'The Ethical Slut'];

for(var j = 0; j < 6; j++){
  var Answer7 = prompt('Can you guess one of my favorite books?');
  var answeredcorrect = false;
  // This loop only checks for correct answers.
  for (var k = 0; k < Question7.length; k++){
    if(Question7[k] === Answer7){
      alert('Your answer is correct!');
      answeredcorrect = true;
    }
    else if (j === 5){
      alert('almost any title is a good book.');
      break;
    }
  }
}
//i need to track and utilize the number of guesses used and
//alert prompt, then break loop, hint hint Sara Noticed
//intiger J- seems like a good place to start. THANKS SARA
