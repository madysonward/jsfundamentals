let input = document.getElementById("input");
let output = document.getElementById("output");
let ulist = document.getElementById("friendsList");
let newName = "";
//console.log(input.value);
	
input.focus(); //.focus allows the page to open with the form ready to be typed in! 
function capitalize() {
	for ( let l in input.value ) {
		if ( l == 0 ) {
			newName = input.value[l].toUpperCase();
		} else {
			newName += input.value[l].toLowerCase();
		}
	}

	output.innerHTML = "Capitalized Name: " + newName;
	input.value = "";
	addItem();
}


/* BRONZE CHALLENGE: Find out how to have a conditional target the 'enter key', so that once it's 
pressed, it can submit the form. Note: the below is called an event! */

document.onkeypress = function(e) {
	console.log(e)
	if ( e.keyCode === 13 ) {
		capitalize()
	}
}


/* SILVER CHALLENGE: After a name is capitalized, make the form clear. */
// See line 17


/* GOLD CHALLENGE: Create an unordered list that prints out each name that a user wants to 
capitalize without bullet points.*/

function addItem() {
	let li = document.createElement("li");
	let text = li.innerHTML = newName;

	ulist.appendChild(li);
}
//Also see line 18

/*  
To add a new HTML element through JavaScript, use .createElement()

let test = document.createElement("li");
console.log(test);

*/