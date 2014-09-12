var racerOne, racerTwo;

function Racer(name, speed, focus) {
  this.name = name;
  this.speed = parseInt(speed);
  this.focus = parseInt(focus);
  this.total = 0;
  }

function race() {
  racerOne = new Racer (document.getElementsByName('racerOne')[0].value, document.getElementsByName('racerOneSpeed')[0].value, document.getElementsByName('racerOneFocus')[0].value);
  racerTwo = new Racer (document.getElementsByName('racerTwo')[0].value, document.getElementsByName('racerTwoSpeed')[0].value, document.getElementsByName('racerTwoFocus')[0].value);

  console.log (racerOne.name + " and " + racerTwo.name + " have agreed to a 5-minute race... AND THEY'RE OFF!!!");

  for (var i = 1; i < 6; i++) {

    racerOne.total += racerOne.speed * racerOne.focus + Math.floor((Math.random() * 3) + 1); 
    racerTwo.total += racerTwo.speed * racerTwo.focus + Math.floor((Math.random() * 3) + 1);

    var x = "After " + i + " minutes..." + racerOne.name + " has traveled " + racerOne.total.toFixed(0) * 13 + " meters! " + racerTwo.name + " has traveled " + racerTwo.total.toFixed(0) * 13 + " meters! ";
    console.log(x);
    document.getElementById('box').innerHTML += x + "\n";

	  if ((i === 5) && (racerOne.total == racerTwo.total)) {
	    console.log ("It's a tie!");
	    document.getElementById('box').innerHTML += "It's a tie!"+ "\n";
	    }
	  else if ((i === 5 && racerOne.total > racerTwo.total)) {
	    console.log (racerOne.name + " won!")
	    document.getElementById('box').innerHTML += racerOne.name + " won!" + "\n";
	    }
	  else if (i === 5) {
	    console.log (racerTwo.name + " won!")
	    document.getElementById('box').innerHTML += racerTwo.name + " won!" + "\n";
	    }
    } 
  } 

