$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "http://rest.learncode.academy/api/learncode/javascriptfall",
	}).done(function(data){
		console.log(data);
	})
	

	

	$(submitBTN).click(function(){
		let person = {
			name: inputName.value,
			email: inputEmail.value,
		}


		console.log(person)
		$.ajax({
			type: "POST",
			url: "http://rest.learncode.academy/api/learncode/javascriptfall",
			data: person
		}).done(function(info){
			console.log(info);
		})
	})

})

var $friends = $("#friends");
var $name = $("#name");
var $age = $("#age");
var friendTemplate = "" +
	"li" + 
	"<p><strong>Name:</strong> {{name}}</p>" +		
	"<p><strong>Age:</strong>  {{age}}</p>" +
	"<button id='{{id}}'' class='remove'>X</button>" +
	"</li>";

function addFriend(friend){
	$(friends).append(Mustache.render(friendTemplate, friend));
}


$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "http://rest.learncode.academy/api/learncode/friends",
		success: function(friends){
			$.each(friends, function(i, friend){
				addFriend(friend);
			});
		},
		error: function(){
			alert("Error loading friends.");
		}
	});

	$("#addFriend").on("click", function(){
		let friend = {
			name = $name.val(),
			age = $age.val()
		};
		$.ajax({
			type: "POST",
			url: "http://rest.learncode.academy/api/learncode/friends",
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);
			},
			error: function(){
				alert("Error saving order!");
			}
		});
	});



});


//Below is (maybe) scratch. need to review



	// $("#addFriend").on("click", function(){
	// 	var friend = {
	// 		name = $name.val(),
	// 		age = $age.val()
	// 	}

	// });

	// $.ajax({
	// 	type: "POST",
	// 	url: "http://rest.learncode.academy/api/learncode/friends",
	// 	data: friend,
	// 		success: function(newFriend){
	// 		addFriend(newFriend);
	// 	},
	// 		error: function(){
	// 		alert("Error saving order.")
	// 	}
	// });


/* You can grab something out of an input box using .val */