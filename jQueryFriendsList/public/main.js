var $friends = $("#friends");
var $name = $("#name");
var $age = $("#age");
var friendTemplate = "" +
	"<li>" + 
	"<p><strong>Name:</strong> {{name}}</p>" +		
	"<p><strong>Age:</strong>  {{age}}</p>" +
	"<button id='{{id}}'' class='remove'>X</button>" +
	"</li>";


function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};



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

		var friend = {
			name: $name.val(),
			age: $age.val()
		}
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
		})

	})

	$friends.delegate(".remove", "click", function(){
		var $li = $(this).closest("li");

		$.ajax({
			type: "DELETE",
			url: "http://rest.learncode.academy/api/learncode/friends/" + $(this).attr("id"),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				})
			}
		})
	})

});

/* You can grab something out of an input box using .val */