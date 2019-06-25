//see database.js for notes regarding the built in require() method
const express = require('express');

const backEnd = express();

//creating a single endpoint to test with postman
backEnd.get('/', (req, res) => res.send('API Connected'));

//This will be the number that our Port is identified with
const PORTENTRY = 3000;

//using the built in listen() method we are able to identify the port
// that we want our application to be running on
backEnd.listen(PORTENTRY, () => console.log(`Port Running: ${PORTENTRY} `));
