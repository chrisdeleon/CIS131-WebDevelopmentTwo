/*
 * Chris de Leon
 * 11/14/2022
 * CIS131 - Movie Database Using Vue.js
 */
var movieArray = []; // initialize empty array to store API objects
var randomNumber; // random number for the highlight movie

function getData() { // function returns information from TMDB API using axios
	axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=eb5fafc9ff4aaca27543575afba0e08a&language=en-US&page=1") // get request
		.then(function(response) { // function for returning results of promise
			// displays result of promise in console
			movieArray = response.data.results; // stores API objects in empty array
		});
}

getData(); // calls the function


var app = new Vue({ // new instance of Vue
	el: "#app", // selects tag with id of app from element

	data: { // a property we can have access to, have to be exactly that. This is an object
		// within the data object you can create your own properties
		pageTitle: "Upcoming Movies",
		randomTitle: "Click here for a random movie!",
		randomImage: " ",
		randomOverview: " ",
		items: [ // placeholders for the movie details
			{
				title: "",
				overview: "",
				imgSrc: ''
			}, {
				title: "",
				overview: "",
				imgSrc: ""
			}, {
				title: "",
				overview: "",
				imgSrc: ""
			}, {
				title: "",
				overview: "",
				imgSrc: ""
			}, {
				title: "",
				overview: "",
				imgSrc: ""
			}, {
				title: "",
				overview: "",
				imgSrc: ""
			}
		]
	},
	methods: {
		movieLoad() { // loads movies into the correspoding array item
				for (var i = 0; i < 6; i++) {
					this.items[i].title = movieArray[i].title;
					this.items[i].imgSrc = 'https://image.tmdb.org/t/p/w200' + movieArray[i].poster_path;
					this.items[i].overview = movieArray[i].overview;
				}
				document.getElementById('button').style.display = 'none'; // removes the button after click since it's no longer necessary
			},
			randomMovie() { // selects a random movie from the movie array and loads the corresponding information
				randomNumber = Math.floor(Math.random() * movieArray.length);
				this.randomTitle = movieArray[randomNumber].title;
				this.randomImage = 'https://image.tmdb.org/t/p/w200' + movieArray[randomNumber].poster_path;
				this.randomOverview = movieArray[randomNumber].overview;
			}

	}
});