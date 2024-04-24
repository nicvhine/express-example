var express = require('express');
var app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded()); // to support URL-encoded bodies


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    console.log(firstName + ' ' + lastName)
    res.redirect('/');
})


var server = app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
})