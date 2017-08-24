const express = require("express");
/* const is a type of variable.
const stands for constant, and is a fixed variable. It can NOT be reassigned. */

const app = express();
/* The above express refers to the original const express, but this time (above), we're just 
envoking it. */

const http = require("http").Server(app);
/* The above  */

app.use(express.static(__dirname + "/public1"));

app.get("/", function(req,res){
	res.sendFile(__dirname + "/0.01_starWars.html");
})
/* req = request
   res = response 
   A forward slash always stands for the root of your application. */

http.listen(4000, function(){
	console.log("Listening on port 4000");
})