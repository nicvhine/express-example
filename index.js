var express = require('express');
var cors = require('cors');
var app = express();

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.get('/', (req, res) => {
    res.render('pages/index')
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