//jshint esversion:6
//Starting code for your milestone project
/* All HTML(ejs) files are kept ready with little bit of css added. Your tasks are to complete the final project step by step.
 Whatever was taught till now, you have to apply it and finish your project. This is sort of a weekly task where
whatever you learn that week, you have to implement. */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//mongodb+srv://<username>:<password>@cluster0.lzhjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://user:test123@cluster0.lzhjx.mongodb.net/blogs', {useNewUrlParser:true, useUnifiedTopology: true});

const Blog = require("./models/post");


app.get("/",(req,res)=>{
  let blog = [];
  Blog.find({},(err,docs)=>{
    if(err){
      console.log(err);
    }else{
      console.log(docs);
      blog = docs;
      res.render("home",{
        blog : blog
      })
    }
      
    });
});


//add GET request code for the path "/about" here...
app.get("/about", (req,res)=>{
  res.render("about");
});



//add GET request code for the path "/contact" here...
app.get("/contact", (req,res)=>{
  res.render("contact");
});



//add GET request code for the path "/post" here...
app.get("/post", (req,res)=>{
  res.render("post");
});



//add POST request code for the path "/post" here...
app.post("/post",(req,res)=>{
  
});



//add GET request code for the path "/compose" here...
app.get("/compose", (req,res)=>{
  res.render("compose");
});

app.post("/compose", (req,res)=>{
  console.log(req.body); 
  let title = req.body.title;
  let content = req.body.content;
  console.log(title);
  console.log(content);
  const post = new Blog({
    title : title,
    content : content
  });
  post.save();

  res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
