const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
const items = ["Milk", "Bread", "Eggs"];
const workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));



// Telling express to use public folder for css.
app.use(express.static("public"));
// boiler code from ejs for express
app.set("view engine", "ejs");
//sending data to html
app.get("/", function (req, res) {

	const day = date.getDate();

	// render is used for ejs to change the data
	res.render("list", { listTitle: day, newListItems: items });
});

// Cating the data after pressing submit
app.post("/", function (req, res) {

	const item = req.body.newItem;
	if (req.body.list === "Work") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	}
});

// Targeting work route
app.get("/work", function (req, res) {
	res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
	 res.render("about");
});

//sever is staring for project node/nodemon
app.listen(3000, function (req, res) {
	console.log("Sever is started on port 3000");
});







// Alternative Ways to get a week day!

// let date = new Date();
//     let weekDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     let day = date.getDay();

//     res.render("list",{kindOfDay: weekDays[day]})

// Other Way!

// var currentDay = today.getDay();
//   var day = "";

//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;

//     default:
//     console.log("Error: current day is equal to: " + currentDay);
//   }
