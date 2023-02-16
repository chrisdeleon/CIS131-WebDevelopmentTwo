/* Chris de Leon
    9/24/2022
    CIS131 */


    var pizzaArray = [ // pizza flavor types for select menu
	"Pepperoni",
	"Hawaiian",
	"Canadian Bacon",
	"Sausage",
	"Cheese"
];


function checkForm(frm) { // form validator 
	var isValid = true;
	var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (frm.name.value == "") { // name validator ensures name is not blank
		isValid = false;
		frm.name.focus();
		frm.name.style.backgroundColor = "#ffbfbf";
		document.getElementById('errorName').style.display = "inline";
		document.getElementById('errorName').innerHTML = "* Please enter a name";
	} else if (frm.name.value.length < 6) { // name validator ensures name has at least 6 character
		isValid = false;
		frm.name.focus();
		frm.name.style.backgroundColor = "#ffbfbf";
		document.getElementById('errorName').style.display = "inline";
		document.getElementById('errorName').innerHTML = "* Please enter a name with at least six characters";
	}

	if (frm.number.value == "") { // number validator
		isValid = false;
		frm.number.focus();
		document.getElementById('errorNumber').style.display = "inline";
		document.getElementById('errorNumber').innerHTML = "*  Please enter a number";
		frm.number.style.backgroundColor = "#ffbfbf";
	} else if (frm.number.value.match(regex)) { // number validator that ensures proper format
		isValid = true;
		frm.number.style.backgroundColor = "#ffffff";
		document.getElementById('errorNumber').style.display = "none";
	} else {
		isValid = false;
		document.getElementById('errorNumber').style.display = "inline";
		document.getElementById('errorNumber').innerHTML = "* please enter a valid number";
		frm.number.style.backgroundColor = "#ffbfbf";
	}

	if (frm.flavor.value == "") { // flavor validator
		isValid = false;
		document.getElementById('errorFlavor').style.display = "inline";
		document.getElementById('errorFlavor').innerHTML = "*  Please select a flavor";
		document.getElementById('flavor').style.backgroundColor = "#ffbfbf";

	}

	if (frm.quantity.value == "") { // quantity validator
		isValid = false;
		document.getElementById('errorQty').style.display = "inline";
		document.getElementById('errorQty').innerHTML = "*  Please enter a quantity";
		document.getElementById('quantity').style.backgroundColor = "#ffbfbf";
	}

	if (isValid) { // if all fields are correct then the form is submitted
		frm.submit();
	}
}

var maxPizzas = 10; // this assignment calls for a maximum of 10, but the number can be adjusted if needed
var qtySelect = document.getElementById("quantity");

for (var i = 1; i <= maxPizzas; i++) { // for loop used to create quantity
	var optionCreate = document.createElement('option');
	optionCreate.value = i;
	optionCreate.innerHTML = i;
	qtySelect.appendChild(optionCreate);
}


var flavorSelect = document.getElementById('flavor');

for (var counter = 0; counter < pizzaArray.length; counter++) { // for loop used to create flavors
	var flavorCreate = document.createElement('option');
	flavorCreate.value = pizzaArray[counter];
	flavorCreate.innerHTML = pizzaArray[counter];
	flavorSelect.appendChild(flavorCreate);
}