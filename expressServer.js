//this file is the core of our our back end project.
// it is where our server will be launched from

// here we are using built in require method to bring in our installed dependencies
// which will help us to run our application.
//  we are bringing in express to use in our application since we are going to be creating
// an express backend application that will communicate to our front end.
const express = require('express');

// cors allows our server to take in requests and communicate to a different domain
//we are then calling it below in our .use method
const cors = require('cors');

//bringing in dotenv dependecy which is how we will store our connection to our database into a .env file
require('dotenv').config();

// bringing in mongoose dependency which helps us to connect to our mongodb database
const mongoose = require('mongoose');

// we are creating an express application and therefore setting express() as our backend
const backend = express();
backend.use(cors());

//this allows us to parse json so that we can send and recieve json into the database
backend.use(express.json());

//here we are setting up our port to run on 3200 and using our dotenv which we brought in above
// side note I LOVE 32 ...long story
const PORTENTRY = process.env.PORT || 3200;

//the flag for useNewUrlParser and useCreateIndex is updated syntax so that it will run properly in future versions
const URIdatabase = process.env.ATLAS_URI_DB;
mongoose.connect(URIdatabase, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongo Database Connected Good Job!');
});

//This is how our API routes interface with the expressServer.js file
// all of our routes go through here and into the routes/API/firstNames or
// other file name if our project should expand.
// using the built in use() enables us to use middleware allowing us to better break apart our code
// into smaller more managable chunks
//backend.use('/API/firstNames', require('./routes/firstNames'));
const firstNamesRouter = require('./routes/firstNames');
backend.use('/firstNames', firstNamesRouter);

//using the built in listen() method we are passing in our PORTENTRY value
// so that our server will open to its contained value and then we are console logging
// that value with a message as a nice way to see that everything is running smoothly
// in our back end side of things
backend.listen(PORTENTRY, () => console.log(`Port Running: ${PORTENTRY} `));
