//Stockmarket POrtfolio app by Shubhankar Tiwari
const express = require('express');
const  exphbs = require('express-handlebars');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine());
const otherstuff = "Hello there this is other stuff...";

// Set Handlebars route
app.get('/', function (req, res)  {
    res.render('home', {
    	stuff: otherstuff
    });
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('server Listening to port '+PORT));