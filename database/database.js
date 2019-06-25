// using the built in Node function require() we are
// able to load our modules. This helps us split our application
// up into files and thus organize our code more neatly.
//here we are loading in the module mongoose and config.
// const db is using a get method to bring in mongoURI from mongo.json
// which will allow us to access the value associated with that .
const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoURI');

//creating an arrow function so that we can
const dbConnector = async () => {
  try {
    await mongoose.connect(database);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnector;
