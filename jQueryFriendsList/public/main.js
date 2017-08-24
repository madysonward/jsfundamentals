$(document).ready(function(){
	let names;
	$.ajax({
		type: "GET",
		url: "http://rest.learncode.academy/api/learncode/friends",
	}).done(function(data){
		names = data;
		console.log(data);
		console.log(names)
	})
	console.log("Hello!");
	console.log(names)
})