$(document).ready(function(){
	let names;

	$.ajax({
		type: "GET",
		url: "http://rest.learncode.academy/api/learncode/javascriptfall",
	}).done(function(data){
		names = data;
		console.log(data);
		console.log(names)
	})

	console.log("Hello!");
	console.log(names)

	let person = {
		name: "",
		email: "",
	}

	$.ajax({
		type: "POST",
		url: "http://rest.learncode.academy/api/learncode/javascriptfall",
		data: person
	}).done(function(info){
		console.log(info);
	})
	$(submitBTN).click(){
		person.name 
		person.email
	}

})

/* You can grab something out of an input box using .val */