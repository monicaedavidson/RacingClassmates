<script>
/* The declaration of the RacerOne and RacerTwo variables in line 4 and creation of the Racer constructor in lines 6-11, are from a Code Fellows class with Brook Riggio on 8/6/2014. http://www.w3schools.com/jsref was also used as a reference for use of Math.pow and document.write. */

function race {

  var RacerOne, RacerTwo;
  var RacerOneTotal = 0;
  var RacerTwoTotal = 0;

  function Racer(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
  }

  RacerOne = new Racer (getElementByID('racerOne'), getElementByID('racerOneSpeed'), getElementbyID('currentRacerOneFocus'));
  RacerTwo = new Racer (getElementByID('racerTwo'), getElementByID('racerTwoSpeed'), getElementbyID('currentRacerTwoFocus'));

  //the i in the for loop is the number of minutes of the race
  //since RacerTwos can travel 20 meters/minute, I multiplied speed by 20m in the results
  for (var i = 1; i < 6; i++) {

    var currentRacerOneFocus -= i; //private var
    var currentRacerTwoFocus  -= i; // private var

    RacerOneTotal += Math.pow(RacerOne.speed, currentRacerOneFocus);
    RacerTwoTotal += Math.pow(RacerTwo.speed, currentRacerTwoFocus);


  //var raceResult = (racerOne.name + " and " + racerTwo.name + " have agreed to a 5-minute race...<br /><br />AND THEY'RE OFF!!!<br /><br />");

  // After " + i + " minutes...<br />" RacerOne.name + " has traveled " + RacerOneTotal*200 + " meters!<br />" RacerTwo.name + " has traveled " + RacerTwoTotal*200 + " meters!<br /><br />" Winner.name + " won!);

}

</script>
