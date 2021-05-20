//jshint esversion:6
//Starting code for your milestone project
/* All HTML(ejs) files are kept ready with little bit of css added. Your tasks are to complete the final project step by step.
 Whatever was taught till now, you have to apply it and finish your project. This is sort of a weekly task where
whatever you learn that week, you have to implement. */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("home");  
});

//add GET request code for the path "/about" here...



//add GET request code for the path "/contact" here...



//add GET request code for the path "/post" here...



//add POST request code for the path "/post" here...



//add GET request code for the path "/compose" here...


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
