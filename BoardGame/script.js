//  Chris de Leon
//  10/7/2022
//  CIS131 Midterm Project

var diceArray = [ // array with dice images
	"1.png",
	"2.png",
	"3.png",
	"4.png",
	"5.png",
	"6.png"
];


var lifeCardArray = [
	"You landed on chance! Looks like you needed a break from all the classes.",
	"You landed on chance! What are you doing? Your opponent will win if you continue to land on these.",
	"You landed on chance! Did you happen to land here by chance?",
	"You landed on chance! You're almost there... or not...",
	"You landed on chance! Try landing on a course next time.",
	"You landed on chance! So close, yet so far.",
	"You landed on chance! Luckily, these don't penalize you...",
	"You landed on chance! Better luck next time.",
	"You landed on chance! Come here often?",
	"You landed on chance! Your opponent doesn't stand a chance, evidently, you're quiet literally standing on one..."
];

var classArray = [ // array with class names, excules CIS260
	"Start",
	"CIS-120",
	"CIS-130",
	"CIS-131",
	"Chance!",
	"CIS-151",
	"CIS-210",
	"Chance!",
	"CIS-244",
	"MTH-140",
	"MTH-141",
	"MTH-214",
	"Chance!",
	"PHY-120",
	"BIO-160",
	"Freebie!"
];




var i = 0; // counter for loops
for (i = 0; i < classArray.length; i++) { // loads array into HTML
	document.getElementById(i).innerHTML = classArray[i];
}

var rollButton = document.getElementById('button');
var firstDie = document.getElementById('firstDie');
var secondDie = document.getElementById('secondDie');
var turnCounter = 0;
var gradeVerifier = false; // ensures grade is clicked
var gradeButton = document.getElementById('gradeButton');
gradeButton.addEventListener('click', grader);
var singleGrade = false; // ensures only one grade
var gradeAlert = document.getElementById('gradeAlert');
var singleAlert = document.getElementById('singleAlert');
var p1Total = 0;
var p2Total = 0;
var clearTable = 0;
var chanceText = document.getElementById('chanceText');

rollButton.addEventListener('click', diceRoll);

function diceRoll(e) { // select random dice from array
	// indicates which player is up and records total spaces moved

	var firstRandomNum = Math.floor(Math.random() * 6);
	var secondRandomNum = Math.floor(Math.random() * 6);
	firstDie.src = diceArray[firstRandomNum]; // changes the die's image
	secondDie.src = diceArray[secondRandomNum];
	firstRandomNum += 1; // added 1 so that math is correct;
	secondRandomNum += 1;
	var sum = firstRandomNum + secondRandomNum;
	clearTable++;

	if (gradeVerifier == false) { // if statement makes sure that player clicks grade button
		rollButton.style.backgroundColor = "white"; // resets any color added
		singleAlert.style.display = "none";
		grade.innerHTML = '<img src="canvas.png" alt="" class="canvas"><br>Grade: ';
		turnCounter++; // switch for each player's turn
		singleGrade = false; // resets grade
		clearTable++;

		switch (turnCounter % 2) { // switches between players' turn
			case 0: // second player's turn
				document.getElementById('playerOne').style.display = "block";
				document.getElementById('playerTwo').style.display = "none";
				p2Total += sum;
				if (p2Total >= 16) {
					var p2Remainder = p2Total % 16; // grabs remaining moves
					p2Total = 0; // resets the character to start position
					p2Total += p2Remainder; // allows for the remaining moves to play out
				}

				if (classArray[p2Total] == classArray[4] || classArray[p2Total] == classArray[7] || classArray[p2Total] == classArray[12]) {
					chanceSelector();
				}
				console.log(p2Total);

				document.getElementById(p2Total).innerHTML += '<img src="patrick.png" alt="" class="small">'; // changes player 2's location
				break;
			case 1: // first player's turn
				document.getElementById('playerOne').style.display = "none";
				document.getElementById('playerTwo').style.display = "block";
				p1Total += sum;
				if (p1Total >= 16) {
					var p1Remainder = p1Total % 16; // grabs remaining moves
					p1Total = 0; // resets the character to start position
					p1Total += p1Remainder; // allows for the remaining moves to play out
				}

				if (classArray[p1Total] == classArray[4] || classArray[p1Total] == classArray[7] || classArray[p1Total] == classArray[12]) {
					chanceSelector();
				}

				console.log(p1Total);

				if (clearTable >= 2) { // clears the table but keeps track of player 2's last location
					for (i = 0; i < classArray.length; i++) { // loads array into HTML
						document.getElementById(i).innerHTML = classArray[i];
					}
					document.getElementById(p2Total).innerHTML += '<img src="patrick.png" alt="" class="small">'; // keeps p2's location
				}
				document.getElementById(p1Total).innerHTML += '<img src="spongebob.png" alt="" class="small">'; // changes player 1's location
				break;
		}
		gradeVerifier = true; // ensure button click is registered once.
	} else {
		gradeButton.style.backgroundColor = "#fa4c50";
		gradeAlert.style.display = "block";
	}
}

var grade = document.getElementById('grade');
var gradeRandomizer = 0;

function grader(e) { // function gives grade and allows for the next player to begin
	if (singleGrade == false) {
		gradeRandomizer += Math.floor(1 + Math.random() * 5); // 5 options that correspond to grades

		switch (gradeRandomizer) {
			case 1:
				grade.innerHTML += "A";
				addCourse();
				break;
			case 2:
				grade.innerHTML += "B";
				addCourse();
				break;
			case 3:
				grade.innerHTML += "C";
				addCourse();
				break;
			case 4:
				grade.innerHTML += "D";
				break;
			case 5:
				grade.innerHTML += "F";
				break;
		}
		gradeVerifier = false;
		gradeButton.style.backgroundColor = "white";
		gradeAlert.style.display = "none";
		singleGrade = true;
		gradeRandomizer = 0;
		chanceText.innerHTML = "";
	} else {
		singleAlert.style.display = "block";
		rollButton.style.backgroundColor = "#24d940";
	}
}


var playeroneClasses = document.getElementById('playerOneClasses');
var playertwoClasses = document.getElementById('playerTwoClasses');

function addCourse() {
	switch (turnCounter % 2) {
		case 0: // player 2
			if (classArray[p2Total] == classArray[4] || classArray[p2Total] == classArray[7] || classArray[p2Total] == classArray[12] || classArray[p2Total] == classArray[15] || classArray[p2Total] == classArray[0]) {} else {
				playertwoClasses.innerHTML += classArray[p2Total] + " ";
			}
			courseCheck();
			break;
		case 1: // player 1
			if (classArray[p1Total] == classArray[4] || classArray[p1Total] == classArray[7] || classArray[p1Total] == classArray[12] || classArray[p1Total] == classArray[15] || classArray[p1Total] == classArray[0]) {} else {
				playeroneClasses.innerHTML += classArray[p1Total] + " ";
			}
			courseCheck();
			break;
	}
}

var playButton = document.getElementById('play');
var popup = document.getElementById('popup');
var body = document.getElementById('body');
var spongebob = document.getElementById('spongebob');
var patrick = document.getElementById('patrick');
var diceContainer = document.getElementById('diceContainer');

playButton.addEventListener('click', popupExit);

function popupExit(e) { // removes the popup screen
	popup.style.display = "none";
	body.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
	spongebob.src = "spongebob.png";
	patrick.src = "patrick.png";
	diceContainer.style.display = "block";
}

var rules = document.getElementById('rules');
rules.addEventListener('click', popupShow);

function popupShow(e) { // displays the rules again
	popup.style.display = "block";
	body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
	spongebob.src = "";
	patrick.src = "";
	diceContainer.style.display = "none";
}

function chanceSelector() { // gives random chance card
	var chance = Math.floor(Math.random() * 10);
	console.log(lifeCardArray[chance]);
	chanceText.innerHTML = lifeCardArray[chance];
}

var p1Capstone = document.getElementById('p1Capstone');
var p2Capstone = document.getElementById('p2Capstone');
var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');
var card = document.getElementById('card');

function courseCheck() { // checks to see if a player has won
	if (playeroneClasses.innerHTML.length == 32) { // 32 is the exact length of a player with 3 passing classes
		p1Capstone.innerHTML += '<img src="spongebob.png" alt="" class="small">';
		if (gradeRandomizer < 4) { // randomizer lower than 4 is a passing score
			title.innerHTML = "PLAYER ONE WINS!";
			subtitle.innerHTML = "GAME OVER";
			card.innerHTML = "<br>CONGRATULATIONS PLAYER ONE!<br>YOU WON!<br><img src='spongebob-celebrate.png' class='winner'>";
		}
	}

	if (playertwoClasses.innerHTML.length == 32) {
		p2Capstone.innerHTML += '<img src="patrick.png" alt="" class="small">';
		if (gradeRandomizer < 4) {
			title.innerHTML = "PLAYER TWO WINS!";
			subtitle.innerHTML = "GAME OVER";
			card.innerHTML = "<br>CONGRATULATIONS PLAYER TWO!<br>YOU WON!<br><img src='patrick-celebrate.png' class='winner'>";
		}
	}
}

spongebob.addEventListener('click', scoreDisplay);

function scoreDisplay(e) { // displays score for spongebob
	playeroneClasses.style.display = "block";
}

patrick.addEventListener('click', p2ScoreDisplay);

function p2ScoreDisplay(e) { // displays score for patrick
	playertwoClasses.style.display = "block";
}