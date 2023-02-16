class Contacts {
	constructor(name, last, email, pic) {
		this.name = name;
		this.last = last;
		this.email = email;
		this.pic = pic;
	}
	updateContact() {
		var contactDiv = document.getElementById('name');
		contactDiv.innerHTML = "";
		contactDiv.innerHTML = `<h1>${this.name} ${this.last}</h1>`;
		document.getElementById('contactImg').src = `images/${this.pic}`;
	}
}

var contact1 = new Contacts("Snow", "White", "swhite@castle.com", "snowwhite.png"); // starter contact
var contact2 = new Contacts("Dopey", "Dwarf", "ddwarf@cottage.com", "dopey.png"); // starter contact
var contacts = [contact1, contact2]; // creates array
var form = document.getElementById('form');

// display the name of all of the contact we currently have
var strContacts = "<ul>";
for (var i = 0; i < contacts.length; i++) {
	strContacts += `<li value =${i}>${contacts[i].name} ${contacts[i].last} </li>`;
}
strContacts += "</ul>";
document.getElementById('contactList').innerHTML = strContacts;
document.getElementById('contactList').addEventListener('click', function(e) {
	console.log(contacts[e.target.value]);
	contacts[e.target.value].updateContact();
});

// grabs form data, creates new list item, clears form
function refresh() {

	// stores input data from form into variables
	var enteredfName = document.getElementById("fname").value;
	var enteredlName = document.getElementById("lname").value;
	var enteredEmail = document.getElementById("email").value;
	var enteredsrc = document.getElementById("src").value;

	// uses data from variables to push new contact into array
	var newContact = new Contacts(enteredfName, enteredlName, enteredEmail, enteredsrc);
	contacts.push(newContact);

	// loop to create new items in the list
	var strContacts = "<ul>";
	for (var i = 0; i < contacts.length; i++) {
		strContacts += `<li value =${i}>${contacts[i].name} ${contacts[i].last} </li>`;
	}
	strContacts += "</ul>";
	document.getElementById('contactList').innerHTML = strContacts;
	document.getElementById('contactList').addEventListener('click', function(e) {
		console.log(contacts[e.target.value]);
		contacts[e.target.value].updateContact();
	});

	// resets all the fields to be empty
	for (i = 0; i < form.length - 1; i++) {
		form[i].value = "";
	}
}