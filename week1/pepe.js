//Code 201 Week 1 Lab - Tuesday 20160510
var wooTestPepe = document.getElementById('wooTestPepe');
var bonusQ = document.getElementById('bonusQ');

var userName = prompt('Here we go! Let\'s start by establishing your woo-worthy identity. What should we call you?');
alert(userName + ', huh? Nice. Definitely a swoon-worthy name.');

var keepAsking = true;
while (keepAsking) {
  var confidence = prompt('So, ' + userName + '. Are you a Master of Woo? Y or N').toUpperCase();
  console.log('confidence: ' + confidence);

  if (confidence === 'Y') {
    alert('We like your confidence! Let\'s see how well you\'ve mastered Pepé\'s lessons in woo!');
    keepAsking = false;
  } else if (confidence === 'N') {
    alert('Humility is very attractive - well played! Now let\'s see how well you\'ve mastered Pepé\'s lessons in woo!');
    keepAsking = false;
  } else {
    alert('While it\'s true that rebels are well loved, following directions speaks to reliability and trustworthines. And who doesn\'t find that appealing? We\'ll let you give it another try. Be sure to answer either Y or N.');
  }
} // close of While loop for user confidence

var gel = prompt('What is the key to creating a masterful "swoosh"?').toUpperCase();
var style = prompt('How do we describe Pepé\'s black-and-white style?').toUpperCase();
var nationality = prompt('What nationality is Pepé?').toUpperCase();

// Determining Pepe's age based on current year
var today = new Date();
var year = today.getFullYear();
var agePepe = (year - 1945);
console.log(agePepe);

var numTries = 0;
keepAsking = true; //Reset keepAsking to True after previous while loop set it to false

while (keepAsking) {
  numTries++; //equivalent to numTries = numTries + 1;
  var age = Number(prompt('How old is Pepé and his old school charm?'));
  if (isNaN(age)) {
    alert('Hhmmm... that didn\'t work. Were you trying to write out his age? Try again by typing a number.');
  }
  if (numTries >= 5) {
    alert('Good effort, but every Master of Woo knows that time is of the essence. Plus you\'ve reached the maximum number of attempts. Let\'s move on, shall we?');
    break;
  } else if (age === agePepe) {
    alert('Outstanding. 71 is correct!');
    keepAsking = false;
  } else if (age < 68) {
    alert('Agreed, he does look young for his age. ' + age + ', however is too young! Keep guessing.');
  } else if (age > 74) {
    alert('Come on now, he\'s old school, but not that old school! Guess again.');
  } else if (age === (68 || 69 || 70 || 72 || 73 || 74)) {
    alert('So close! Your guess is off by just a little. Try again!');
  }
} // Close of While loop for Pepé's age

// Tallying the user's score
var questions = [gel, style, nationality, age];
var answers = ['GEL', 'CLASSICALLY MINIMALIST', 'FRENCH', 71];
var score = 0;

for (i = 0; i < questions.length; i++) {
  if (questions[i] === answers[i]) {
    score++;
    console.log(score);
  }
}

wooTestPepe.textContent = 'You answered ' + score + ' out of 4 questions correctly.';

// Bonus question re: who voiced Pepé Le Pew
var bonus = prompt('For an additional bonus of 2 points, Name one of the individuals who gave Pepé his woo-worthy voice.').toUpperCase();

var voice = ['MEL BLANC', 'MAURICE LAMARCHE', 'BRUCE LANOIL', 'GREG BURSON', 'JOE ALASKEY', 'BILLY WEST', 'JEFF BENNETT', 'RENE AUBERJNOIS', 'JEFF BERGMAN'];
for (i = 0; i < voice.length; i++) {
  if (bonus === voice[i]) {
    alert('Correct! Very impressive. Let\'s take a look at your Woo Score now.');
    score = score + 2;
  }
}

bonusQ.textContent = 'Together with the bonus question, your Woo Score is ' + score + '. Quel Woo\'eur!';
