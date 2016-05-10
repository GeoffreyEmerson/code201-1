var user = document.getElementById('user');
var gamer = document.getElementById('gamer');
var vgame = document.getElementById('vgame');
var gamerLevel = document.getElementById('gamerLevel');

var userName = prompt('Hey there, what\'s your name?');
user.textContent = 'Nice to meet you, ' + userName + '.';

var gamerYN = prompt('Are you by any chance a gamer? Y or N');
if (gamerYN === 'Y') {
  gamer.textContent = 'Cool.';
} else if (gamerYN === 'N') {
  gamer.textContent = 'Really? For the sake of this exercise, would you mind pretending that you are? (I\'m just going to pretend like you answered Y.)';
} else {
  gamer.textContent = 'Not much for following directions, eh? ¯\_(ツ)_/¯  Ok, next time!';
}

var favGame = prompt('What\'s you\'re favorite game?');
if (favGame === 'Destiny' || 'destiny') {
  vgame.textContent = 'Hello, fellow Guardian! I knew you were cool from the minute you started typing.';
} else {
  vgame.textContent = 'Um, yeah. ' + favGame + ' sounds cool and all, but I think we all know that "Destiny" is the best. Let\'s agree to disagree, shall we? Moving on... ';
}

var system = prompt('X-Box or Play Station?');
var style = prompt('PCP or PVP?');
var sleep = prompt('Do you regularly burn the midnight oil? Y or N');
if (sleep === 'Y') {
  gamerLevel.textContent = 'Props. ' + system + ' combined with ' + style + ' and no sleep? Respect!';
} else if (sleep === 'N') {
  gamerLevel.textContent = 'Everyone knows the most serious game play takes place at 3:00 AM, but I\'ll give you props for playing ' + style + ' on ' + system + '.';
} else {
  gamerLevel.textContent = 'No Y or N answer as requested, huh? That\'s cool, that\'s cool. I get it. When you\'re serious about your game play, it\'s important to keep these things under wraps. Respect.';
}
