  var racerOneFocus = 0;
  var racerOneSpeed = 0;
  var racerTwoFocus = 0;
  var racerTwoSpeed = 0;
  var racerOne, racerTwo;
  var racerOneTotal = 0;
  var racerTwoTotal = 0;
  var oneFocus = 0;
  var oneSpeed = 0;
  var twoFocus = 0;
  var twoSpeed = 0;
  var raceResult1, raceResult2;

function Racer(name, speed, focus) {
  this.name = name;
  this.speed = speed;
  this.focus = focus;
  }

function Winner(name) {
  this.name = racerOne;
}

function race() {

  racerOne = new Racer (document.getElementsByName('racerOne')[0].value, document.getElementsByName('racerOneSpeed')[0].value, document.getElementsByName('racerOneFocus')[0].value);
  racerTwo = new Racer (document.getElementsByName('racerTwo')[0].value, document.getElementsByName('racerTwoSpeed')[0].value, document.getElementsByName('racerTwoFocus')[0].value);

  oneFocus = parseInt(racerOne.focus);
  oneSpeed = parseInt(racerOne.speed);
  twoFocus = parseInt(racerTwo.focus);
  twoSpeed = parseInt(racerTwo.speed);

  console.log (racerOne.name + " and " + racerTwo.name + " have agreed to a 5-minute race...<br /><br />AND THEY'RE OFF!!!<br /><br />");

  for (var i = 1; i < 6; i++) {

    var currentRacerOneFocus = currentRacerOneFocus - i;
    var currentRacerTwoFocus = currentRacerTwoFocus - i;

    racerOneTotal += Math.pow(oneSpeed, oneFocus);
    racerTwoTotal += Math.pow(twoSpeed, twoFocus);

    console.log ("After " + i + " minutes..." + racerOne.name + " has traveled " + racerOneTotal + " meters!" + racerTwo.name + " has traveled " + racerTwoTotal + " meters!" + Winner.name + " won!");
  }
};
