var express = require('express');
var router3 = express.Router();
const education= [{
    schoolName: "Stevens Institute of Technology",
    degree: "Master of Science in Computer Science",
    favoriteClass: "Introduction to Natural Language processing",
    favoriteMemory: "Looking at the New York skyline is the most memorable memory of this school"
    
  },
  {
    schoolName: "Vidyalankar Institute of Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    favoriteClass: "Soft Computing",
    favoriteMemory: "Attending guest lectures was the most memorable memory of this school"
    
  },
  {
    schoolName: "St.Columba Girls High School",
    degree: "High School Diploma",
    favoriteClass: "English",
    favoriteMemory: "Going to the upper hall from the spiral stairs crossing the attic and chem lab was the most memorable memory of this school"
    
  },
]

router3.get('/', function(req, res){
    
   res.send(education);
});
router3.post('/', function(req, res){
   res.send('POST route on education.');
});

//export this router to use in our index.js
module.exports = router3;