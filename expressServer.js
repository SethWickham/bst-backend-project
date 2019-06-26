// here we are using built in require method to bring in our installed dependencies
// which will help us to run our application

//  bringing in express to use in our application since we are going to be creating
// an express backend
const express = require('express');
// we are creating an express application and setting this as our backEnd
const backend = express();
// bringing in cors dependency which will allow our server to take in requests and communicate to a different domain
const cors = require('cors');
// bringing in mongoose dependency which helps us to connect to our mongodb database
const mongoose = require('mongoose');

//bringing in dotenv dependecy which is how we will store our connection to our database into a .env file
require('dotenv').config();

//This is how our API routes interface with the expressServer.js file
// all of our routes go through here and into the routes/API/firstNames or
// other file name if our project should expand.
// using the built in use() enables us to use middleware allowing us to better break apart our code
// into smaller more managable chunks
backend.use('/API/firstNames', require('./routes/API/firstNames'));

//this allows us to parse json so that we can send and recieve json into the database
backend.use(express.json);

//the flag for useNewUrlParser and useCreateIndex is updated syntax so that it will run properly in the future
const URIdatabase = process.env.ATLAS_URI_DB;
mongoose.connect(URIdatabase, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongo Database Connected Good Job!');
});
//here we are setting up our port to run on 3200 and using our dotenv which we brought in above
// side note I LOVE 32 ...long story
const PORTENTRY = process.env.PORT || 3200;

//using the built in listen() method we are passing in our PORTENTRY value
// so that our server will open to the designated value and then we are console logging
// that value with a message as a nice way to see that everything is running smoothly
backend.listen(PORTENTRY, () => console.log(`Port Running: ${PORTENTRY} `));
