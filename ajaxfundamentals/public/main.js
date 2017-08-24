$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "http://swapi.co/api/planets/",
	}).done(function(data){
		console.log(data);
		planets = data.results;
		for (let i of planets) {
			$("#planetList").append("<tr><td>" + i.name + "</td></tr>");
		}


		/* Can also be written as:
		data.results.forEach(function(i){
	console.log(i.name)
		}) */
	})
})
	$.ajax({
		type: "GET",
		url: "https://swapi.co/api/starships/",
	}).done(function(data){
		console.log(data)
	}).done(function(data){
		data.results.forEach(function(s){
			$("#shipList").append("<tr><td>" + s.name + "</tr></td>");
		})
	})


	$("#searchName").on("click", function(){
		let search = $(searchRes).val();
		$.ajax({
			type: "GET",
			url: "https://swapi.co/api/people/?search=" + search
		}).done(function(data){
			data.results[0].films.forEach(function(film){


			$(searchResult).append("<p>" + data.results[0].name + "" + film + "</p>")
		});

		})
	})