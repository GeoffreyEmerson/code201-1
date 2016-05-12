//Code 201 Week 1 Lab - Thursday 20160512
var wooTestPepe = document.getElementById('wooTestPepe');
var bonusQ = document.getElementById('bonusQ');
var keepAsking = true;
var numTries = 0;
var score = 0;

// Determining Pepe's age based on current year
var today = new Date();
var year = today.getFullYear();
var agePepe = (year - 1945);
console.log(agePepe);

var introQuestions = ['Here we go! Let\'s start by establishing your woo-worthy identity. What should we call you?',
                      'Are you a Master of Woo? Y or N'];
var quizQuestions = ['What is the key to creating a masterful "swoosh"?',
                     'How do we describe Pepé\'s black-and-white style?',
                     'What nationality is Pepé?',
                     'How old is Pepé and his old school charm?',
                     'For an additional bonus of 2 points, Name one of the individuals who gave Pepé his woo-worthy voice.'];
var answers = ['GEL',
               'CLASSICALLY MINIMALIST',
               'FRENCH',
               71,
                ['MEL BLANC',
                'MAURICE LAMARCHE',
                'BRUCE LANOIL',
                'GREG BURSON',
                'JOE ALASKEY',
                'BILLY WEST',
                'JEFF BENNETT',
                'RENE AUBERJNOIS',
                'JEFF BERGMAN'
                ]
              ];
var userAnswers = [];

askIntroQuestions();
askQuizQuestions();
firstTally();
askBonusQuestion();

function askIntroQuestions() {
  var userName = prompt(introQuestions[0]);
  alert(userName + ', huh? Nice. Definitely a swoon-worthy name.');

  while (keepAsking) {
    var confidence = prompt('So, ' + userName + '. ' + introQuestions[1]).toUpperCase();
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
} // end of function askIntroQuestions()

function askQuizQuestions() {
  for(var i = 0; i < 4; i++) {
    console.log('In the for loop.');
    userAnswers.push( prompt(quizQuestions[i]).toUpperCase() );
    if(i == 3) {
      keepAsking = true; //Reset keepAsking to True after previous while loop set it to false
      while (keepAsking) {
        numTries++; //equivalent to numTries = numTries + 1;
        if (isNaN(userAnswers[i])) {
          alert('Hhmmm... that didn\'t work. Were you trying to write out his age? Try again by typing a number.');
          userAnswers[i] = prompt(quizQuestions[i]);
        }
        if (numTries >= 5) {
          alert('Good effort, but every Master of Woo knows that time is of the essence. Plus you\'ve reached the maximum number of attempts. Let\'s move on, shall we?');
          break;
        } else if (userAnswers[i] == agePepe) {
          alert('Outstanding. 71 is correct!');
          keepAsking = false;
        } else if (userAnswers[i] < 68) {
          alert('Agreed, he does look young for his age. ' + userAnswers[i] + ', however is too young! Keep guessing.');
          userAnswers[i] = prompt(quizQuestions[i]);
        } else if (userAnswers[i] > 74) {
          alert('Come on now, he\'s old school, but not that old school! Guess again.');
          userAnswers[i] = prompt(quizQuestions[i]);
        } else if ( (userAnswers[i] == 68) || (userAnswers[i] == 69) || (userAnswers[i] == 70) || (userAnswers[i] == 72) || (userAnswers[i] == 73) || (userAnswers[i] == 74) ) {
          alert('So close! Your guess is off by just a little. Try again!');
          userAnswers[i] = prompt(quizQuestions[i]);
        } else {
          alert('I have no idea what you just did! Try again.');
          userAnswers[i] = prompt(quizQuestions[i]);
        }
      } // Close of While loop for Pepé's age
    }
  }
}

function firstTally() {
  // Tallying the user's score
  // var playerAnswers = [gel, style, nationality, age];
  for (i = 0; i < answers.length; i++) {
    if (userAnswers[i] === answers[i]) {
      score++;
      console.log(score);
    }
  }
  wooTestPepe.textContent = 'You answered ' + score + ' out of 4 questions correctly.';
}

function askBonusQuestion() {
  // Bonus question re: who voiced Pepé Le Pew
  var bonus = prompt(quizQuestions[quizQuestions.length - 1]).toUpperCase();
  var voice = answers[answers.length - 1];
  for (i = 0; i < voice.length; i++) {
    if (bonus === voice[i]) {
      alert('Correct! Very impressive. Let\'s take a look at your Woo Score now.');
      score = score + 2;
    }
  }
  bonusQ.textContent = 'Together with the bonus question, your Woo Score is ' + score + '. Quel Woo\'eur!';
}
