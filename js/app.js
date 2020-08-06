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
  } else if (Number(question6 === Answer)){
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
  }
  if (answeredcorrect === true){
    break;
  } else {
    alert('You should read my mind or Covering, Wormwood, No God but God, The Fire Next Time, How to be an Antiracist, The Daily Stoic, The Ethical Slut');
  }
}


// if (homeAnswer === 'yes' || homeAnswer === 'y'){
//   //console.log("correct")
//   alert("correct")
// } else if(homeAnswer === 'no' || homeAnswer === 'n'){
//   //console.log("incorrect")
//   alert("incorrect")
// }

// //question #2
// var homeAnswer2= prompt( "Am i a mercinary?")
// homeAnswer2= homeAnswer2.toUpperCase()
// console.log(homeAnswer2)


// if (homeAnswer2 === 'YES' || homeAnswer2 === 'Y'){
//   //note change in designation "homeAnswer+2"; does this hold the answer elsewhere as a plausible array?
//   //notice push to uppercase variable
//   //console.log("first rule of code club...tell everyone.")
//   alert("first rule of code club...tell everyone.")
// } else if(homeAnswer2 === 'NO' || homeAnswer2 === 'N'){
//   //console.log("correct")
//   alert("correct")
// }

// //Question #3
// var homeAnswer= prompt( "did you move my stapler?")
// homeAnswer= homeAnswer.toLowerCase()
// console.log(homeAnswer)
// //noteadded else statement @ question #3

// if (homeAnswer === 'yes' || homeAnswer === 'y'){
//   //console.log("correct")
//   //you could add an = alert("correct")
// } else if(homeAnswer === 'no' || homeAnswer === 'n'){
//   //console.log("incorrect")
//   alert("incorrect")
// } else (homeAnswer)


// //Question #4
// var homeAnswer= prompt( "Question4?")
// homeAnswer= homeAnswer.toLowerCase()
// console.log(homeAnswer)


// if (homeAnswer === 'yes' || homeAnswer === 'y'){
//   //console.log("correct")
//   alert("correct")
// } else if(homeAnswer === 'no' || homeAnswer === 'n'){
//   //console.log("incorrect")
//   alert("incorrect")
// }

// //Question #05
// var homeAnswer= prompt( "Question 5?")
// homeAnswer= homeAnswer.toLowerCase()
// console.log(homeAnswer)


// if (homeAnswer === 'yes' || homeAnswer === 'y'){
//   //console.log("correct")
//   alert("correct")
// } else if(homeAnswer === 'no' || homeAnswer === 'n'){
//   //console.log("incorrect")
//   alert("incorrect")
// }

// //Question #06 + array
// var homeAnswer= prompt( "Question 6 + array?")
// homeAnswer= homeAnswer.toLowerCase()
// console.log(homeAnswer)


// if (homeAnswer === 'yes' || homeAnswer === 'y'){
//   //console.log("correct")
//   alert("correct")
// } else if(homeAnswer === 'no' || homeAnswer === 'n'){
//   //console.log("incorrect")
//   alert("incorrect")
// }
// var array_question6= [item1, item2, item3, etc... ];
//     if array_question6 =[
//          "item1",
//          "item2",
//          "item3",
//         ];

//         //Question #07 + array
// var homeAnswer= prompt( "Question 7 + array?")
// homeAnswer= homeAnswer.toLowerCase()
// console.log(homeAnswer)


// if (homeAnswer === 'yes' || homeAnswer === 'y'){
//   //console.log("correct")
//   alert("correct")
// } else if(homeAnswer === 'no' || homeAnswer === 'n'){
//   //console.log("incorrect")
//   alert("incorrect")
// }
// var array_question7= [item1, item2, item3, etc... ];
//     if array_question7 =[
//          "item1",
//          "item2",
//          "item3",
//         ];


//notes and code refferenced from: "https://www.w3schools.com/js/js_arrays.asp"

//   <!-- You'll need a Prompt and alert from js and set if/then boundaries for yes/no y/n
//prompt="lets play a game!" if !yes/no then alert =refine answer to y/n
//if yes=then prompt= concatinate "userName"+"let's get to it"+"where am I From?"

//if no=then prompt= concatinate "userName" + "farewell"+img src="clown"||



// 5 different questions like this .. yes how do i concatinate username + ??  AS a follow up question and greeting...//

//Code studied from: https://www.w3schools.com/js/js_if_else.asp//

//Problem Domain
// Teach us more about you! Build out an “About Me” webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from. We will build onto this project over the next few labs. Be prepared to refactor your code each day and learn about how a web site incramentally goes from an idea to a deployed site through various iterations of development.

// User Stories
// Within the industry, you will encounter different ways that requirements are communicated to developers. This technique is called User Stories. User Stories are presented in the manner of

// As a __, I want __, so that___

// This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the the clients need.

// The development team will then create sub-bullets called Feature Tasks which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

// Below are your lab requirements in this format with the feature tasks already created.

// Instructions
// Continue to build off of your lab 02 by adding additonal functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

// As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
// Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
// Convert your work experience and education summary into an unordered list using HTML
// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
// In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.

// Stretch Goals
// After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// Make the number-guessing question use a random number as its correct answer.
// Resources
// Utulize the same resources as described in Lab 02.

// Submission Instructions
// Submit the link to your GitHub repo for this project
// Add a comment to this Canvas submission with answers to the following questions
// How did this go, overall?
// What observations or questions do you have about what you’ve learned so far?
// How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
