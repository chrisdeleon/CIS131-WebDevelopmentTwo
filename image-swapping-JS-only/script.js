var imageArray = [
	"one.jpg",
	"two.jpg",
	"three.jpg",
	"four.jpg",
	"five.jpg",
	"six.jpg",
	"seven.jpg",
	"eight.jpg"
];

var container;
var largeImage;
var i = 0;
var imgItem;
var newImages = document.getElementsByTagName('img');
var mainImage = document.getElementById('main');
mainImage.src = imageArray[i]; // loads image into the main image


// intializes page
window.addEventListener('load', initializer);

function initializer() {
	container = document.getElementById('container');
	largeImage = document.getElementById('main');
	thumbnailCreate();
}

function thumbnailCreate() {
	for (i = 0; i < 4; i++) {
		imgItem = document.createElement('img'); // indicates what HTML tag to create
		imgItem.src = imageArray[i]; // gives each img tag a source from array
		imgItem.classList.add("pointer");
		container.appendChild(imgItem); // creates img tags below container in HTML
		imgItem.addEventListener('click', itemClicked);
	}
}

// changes the main image displayed on click
function itemClicked(e) {
	mainImage.src = e.target.src;
}


// loads new images from array
mainImage.addEventListener("dblclick", function() {
	for (i = 1; i < 4; i++) {

		var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)]; // generates random number based off array length
		newImages[i].src = randomImage;
	}
});