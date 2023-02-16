/* 
* Chris de Leon - jQuery Movies Project
* 10/31/2022
* CIS131
*/


$(document).ready(() => {
	$.ajax({
		url: "https://api.themoviedb.org/3/movie/now_playing?api_key=eb5fafc9ff4aaca27543575afba0e08a&language=en-US&page=1", 
		success: function(result) {

			for (i = 0; i < 3; i++) { // loop used for creation of DOM elements and assigning different ids and classes
				var titleCreate = document.createElement("h1"); // creates h1 element
				titleCreate.innerHTML = result.results[i].original_title;
				titleCreate.id = i; // assigns each h1 tag an id according to the for loop

				var overviewCreate = document.createElement('p'); // creates p elements
				overviewCreate.innerHTML = result.results[i].overview;
				overviewCreate.className = "overview" + i; // assigns each p tag a class according to the for loop

				var imageLoad = document.createElement('img');
				imageLoad.src = "https://image.tmdb.org/t/p/w200" + result.results[i].poster_path; // concatenating the result with the string always renders an image that is 200 px wide
				imageLoad.className = "image" + i;

				// appends to new elements to container div
				$('#container').append(titleCreate);
				$('#container').append(overviewCreate);
				$('#container').append(imageLoad);

				$('#' + i).click(function(event) { // adds a click event to each h1 element

					// this portion toggles between showing and hiding the overview
					var overviewClass = ".overview" + event.target.id;
					$(overviewClass).toggle(600);


					// this portion toggles between showing and hiding the image, by default it is set to hidden
					var imageClass = ".image" + event.target.id;
					$(imageClass).toggle(600);
				});
			}
		}
	});
});