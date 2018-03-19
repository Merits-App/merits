const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const passport = require('passport');

// Get our API routes
const api = require('./routes/api');

const app = express();


//Database Connection
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' +config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database Connection Error: ' +err);
});

//Set Static Folder
app.use(express.static(path.join( __dirname, 'public' )));

// Parsers for POST data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS Middleware
app.use(cors());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Set our api routes
app.use('/api', api);

// Index Route
// app.get('/', (req, res) => {
//     res.send('Invalid Endpoint');
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


//Set Port 
const port = 3000;

// Listen on provided port, on all network interfaces
app.listen(port, () =>  { 
    console.log('Merits API running on port ' +port)});