var express = require('Express');
var app = express();

var about = require('./about.js');
var story = require('./story.js');
var education = require('./education.js');

app.use('/about', about);
app.use('/story', story);
app.use('/education', education);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
    console.log("Your about page will be running on http://localhost:3000/about/");
    console.log("Your story will be running on http://localhost:3000/story/");
    console.log("Your education will be running on http://localhost:3000/education/");
  });
