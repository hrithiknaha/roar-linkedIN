const express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3000;


console.log("Test Check");

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/dashboard', function(req, res){
    res.send('Dasboard of User')
});

// app.get('/test', function(req, res){
//     res.render('test');
// });


app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
})