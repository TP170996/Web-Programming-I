const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your webpage will be running on http://localhost:3000");
});