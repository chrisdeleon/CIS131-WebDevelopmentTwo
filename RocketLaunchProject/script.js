/*  Chris de Leon
10/16/2022
CIS 131 */


/* 

Loading the information takes an absurd amount of time.
It would be helpful to provide a loading screen in the future. 

When I first started the project, in the HTML page, using <a> tags instead of <button> tags caused the JS
function to not load different results. 

*/

var launchButton = document.getElementById('launchGet');
var cardContainer = document.getElementById('cardContainer');
var title = document.getElementById('title');


launchButton.addEventListener('click', loadLaunches);

function loadLaunches() {
	var httpRequest = new XMLHttpRequest(); // created variable with constructor
	httpRequest.open("get", "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/"); // gets information about upcoming launches
	httpRequest.send();
	httpRequest.onreadystatechange = launches;
	cardContainer.style.display = "flex"; // loads the cards
	title.innerHTML = "Upcoming Launches";

	function launches() { // function to load launches
		if (httpRequest.readyState == 4 && httpRequest.status == 200) { // compares XMLHttpRequest client and status code
			var rockets = httpRequest.responseText;
			var rocketsObj = JSON.parse(rockets);
			console.log(rocketsObj);

			// loads information for first card from API
			document.getElementById('cardImageOne').src = rocketsObj.results[0].image;
			document.getElementById('cardOneName').innerHTML = rocketsObj.results[0].name;
			document.getElementById('cardOneMission').innerHTML = rocketsObj.results[0].mission.description;
			document.getElementById('cardOneLink').innerHTML = rocketsObj.results[0].url;

			// second card API info
			document.getElementById('cardImageTwo').src = rocketsObj.results[1].image;
			document.getElementById('cardTwoName').innerHTML = rocketsObj.results[1].name;
			document.getElementById('cardTwoMission').innerHTML = rocketsObj.results[1].mission.description;
			document.getElementById('cardTwoLink').innerHTML = rocketsObj.results[2].url;

			// third card API info
			document.getElementById('cardImageThree').src = rocketsObj.results[2].image;
			document.getElementById('cardThreeName').innerHTML = rocketsObj.results[2].name;
			document.getElementById('cardThreeMission').innerHTML = rocketsObj.results[2].mission.description;
			document.getElementById('cardThreeLink').innerHTML = rocketsObj.results[2].url;

			// fourth card API info
			document.getElementById('cardImageFour').src = rocketsObj.results[3].image;
			document.getElementById('cardFourName').innerHTML = rocketsObj.results[3].name;
			document.getElementById('cardFourMission').innerHTML = rocketsObj.results[3].mission.description;
			document.getElementById('cardFourLink').innerHTML = rocketsObj.results[3].url;
		}
	}
}


var astronautButton = document.getElementById('astronautGet');
astronautButton.addEventListener('click', loadAstronauts);

function loadAstronauts() {
	var httpRequest = new XMLHttpRequest(); // created variable with XML constructor, since var with same name isn't global, reusing the name works
	httpRequest.open("get", "https://lldev.thespacedevs.com/2.2.0/astronaut/"); // gets information about astronauts
	httpRequest.send();
	httpRequest.onreadystatechange = astronauts;
	cardContainer.style.display = "flex"; // loads the cards in case they haven't already been loaded.
	title.innerHTML = "Voyagers of the Unknown";

	function astronauts() {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) { // compares XMLHttpRequest client and status code
			var astronauts = httpRequest.responseText;
			var astronautsObj = JSON.parse(astronauts);
			console.log(astronautsObj);

			// loads information for first card from API - this time for astronauts
			document.getElementById('cardImageOne').src = astronautsObj.results[0].profile_image;
			document.getElementById('cardOneName').innerHTML = astronautsObj.results[0].name;
			document.getElementById('cardOneMission').innerHTML = astronautsObj.results[0].bio;
			document.getElementById('cardOneLink').innerHTML = astronautsObj.results[0].url;

			// second card API info
			document.getElementById('cardImageTwo').src = astronautsObj.results[1].profile_image;
			document.getElementById('cardTwoName').innerHTML = astronautsObj.results[1].name;
			document.getElementById('cardTwoMission').innerHTML = astronautsObj.results[1].bio;
			document.getElementById('cardTwoLink').innerHTML = astronautsObj.results[2].url;

			// third card API info
			document.getElementById('cardImageThree').src = astronautsObj.results[2].profile_image;
			document.getElementById('cardThreeName').innerHTML = astronautsObj.results[2].name;
			document.getElementById('cardThreeMission').innerHTML = astronautsObj.results[2].bio;
			document.getElementById('cardThreeLink').innerHTML = astronautsObj.results[2].url;

			// third card API info
			document.getElementById('cardImageFour').src = astronautsObj.results[3].profile_image;
			document.getElementById('cardFourName').innerHTML = astronautsObj.results[3].name;
			document.getElementById('cardFourMission').innerHTML = astronautsObj.results[3].bio;
			document.getElementById('cardFourLink').innerHTML = astronautsObj.results[3].url;


		}
	}

}