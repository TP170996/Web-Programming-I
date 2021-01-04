var express = require('express');
var router1 = express.Router();
const about= {
    name: "Tejashree Prabhu",
    cwid: "10450404",
    biography: "Hey, I am a graduate student at Stevens Institute of Technology, majoring in Computer Science.An avid coder, food enthusiast and a bookworm.Fueled by my passion for understanding the nuances of Computers."
                +"(\n) I consider myself a ‘forever student,’ eager to both build on my academic foundations in Computer Science and stay in tune with the latest technologies through continued coursework.",
    favoriteShows: ["Chernobyl", "The Spy", "Modern Family", "Suits","Greys Anatomy"],
    hobbies: ["Dance", "Sketching", "Reading"]
  }


router1.get('/', function(req, res){
   
   res.json(about);

});
router1.post('/', function(req, res){
   res.send('POST route on about.');
});

//export this router to use in our index.js
module.exports = router1;