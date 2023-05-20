'use strict';
var userName = prompt("Enter your name:");
var userGender;
while (true) {
  userGender = prompt("Enter your gender:");
  if (userGender === "male" || userGender === "female") {
    break; 
  }
  alert("Invalid ,Please enter either 'male' or 'female'.");
}

    
 var Age;
 while (true) {
    Age=prompt ("enter your Age");
    if (Age >0) {
        break;
    } 
        alert ( 'invalid age,less than or equal to zero ');
 }
 confirm ("do you want to skip the welcoming message");

const name = prompt('Enter your name:');
const gender = prompt('Enter your gender');
if (gender === 'male') {
    alert ("welcome Mr " + name);
} else if (gender === 'female') {
    alert ("welcome Ms " + name);
} else {
    alert ( 'welcome');
    console.log ("welcome ");
}

var question1 = prompt ("do you like playing sport ");
var question2 =prompt ("do you like reading books");
var question3 =prompt ("do you like watching movies");

var answers = [question1 || "invalid", question2 || "invalid", question3 || "invalid"];
console.log("Answers:");
    for (var i = 0; i < answers.length; i++) {
      console.log(answers[i]);
    }
