//see database.js for notes regarding the built in require() method
const express = require('express');

// bringing in our database connector arrow function
//which is then called right below
const dbConnector = require('./config/database');
dbConnector();

// we are creating an express application and setting this as our backEnd
const backEnd = express();

//creating a single endpoint to test with postman
backEnd.get('/', (req, res) => res.send('API Connected'));

//This will be the number that our Port is identified with
const PORTENTRY = 3200;

//using the built in listen() method we are passing in our PORTENTRY value
// and setting our backEnd to our specific port number it will be running on
backEnd.listen(PORTENTRY, () => console.log(`Port Running: ${PORTENTRY} `));
