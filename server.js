//Gets the required Express packages
const express = require("express");
//Creates the Express app	
const app = express();
//Sends Hello World!
app.get("/", function (req, res) {
	res.send("Hello World!");
})
//Listens on port 3000 and logs it
app.listen(3000, function(){
	console.log("Listening on port 3000!");
})
