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

function race() {

  racerOne = new Racer (document.getElementsByName('racerOne')[0].value, document.getElementsByName('racerOneSpeed')[0].value, document.getElementsByName('racerOneFocus')[0].value);
  racerTwo = new Racer (document.getElementsByName('racerTwo')[0].value, document.getElementsByName('racerTwoSpeed')[0].value, document.getElementsByName('racerTwoFocus')[0].value);

  oneFocus = parseInt(racerOne.focus); 
  oneSpeed = parseInt(racerOne.speed);
  twoFocus = parseInt(racerTwo.focus);
  twoSpeed = parseInt(racerTwo.speed);

  console.log (racerOne.name + " and " + racerTwo.name + " have agreed to a 5-minute race... AND THEY'RE OFF!!!");

  for (var i = 1; i < 6; i++) {

    racerOneTotal += 1.3 * (Math.pow(oneSpeed, oneFocus) / Math.floor((Math.random() * 7) + 1)); 
    racerTwoTotal += 1.3 * (Math.pow(twoSpeed, twoFocus) / Math.floor((Math.random() * 7) + 1));
  
    var x = "After " + i + " minutes..." + racerOne.name + " has traveled " + racerOneTotal.toFixed(0) * 13 + " meters! " + racerTwo.name + " has traveled " + racerTwoTotal.toFixed(0) * 13 + " meters! ";
    console.log(x);
    document.getElementById('box').innerHTML += x + "\n";

  if (i === 5 && racerOneTotal === racerTwoTotal) {
      console.log ("It's a tie!");
      document.getElementById('box').innerHTML += "It's a tie!"+ "\n";
      }
      else if (i === 5 && racerOneTotal > racerTwoTotal) {
      console.log (racerOne.name + " won!")
      document.getElementById('box').innerHTML += racerOne.name + " won!" + "\n";
      }
      else if (i === 5) {
      console.log (racerTwo.name + " won!")
      document.getElementById('box').innerHTML += racerTwo.name + " won!" + "\n";
      }
    }
  }

