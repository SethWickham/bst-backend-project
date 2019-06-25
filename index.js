//see database.js for notes regarding the built in require() method
const express = require('express');
// we are creating an express application and setting this as our backEnd
const backEnd = express();

// bringing in our database connector arrow function
//which is then called right below
const dbConnector = require('./config/dbConnector');
dbConnector();

// creating a GET request for POSTMAN
backEnd.get('/', (req, res) => res.send('API Connected GET'));

//creating a POST request for POSTMAN
backEnd.post('/', (req, res) => res.send('API Connected POST'));

backEnd.use('/API/inputForm', require('./routes/API/inputForm'));

//This will be the number that our Port is identified with
const PORTENTRY = 3200;

//using the built in listen() method we are passing in our PORTENTRY value
// and setting our backEnd to our specific port number it will be running on
backEnd.listen(PORTENTRY, () => console.log(`Port Running: ${PORTENTRY} `));
