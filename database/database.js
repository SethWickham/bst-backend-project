// using the built in Node method require() we are
// able to load our modules. Loading modules helps us to split our application
// up into files and thus organize our code more neatly.
//here we are loading in the module mongoose and config.
// const db is using a get method to bring in mongoURI from mongo.json
// which will allow us to access the value associated with that .
const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoURI');

//creating an arrow function which will run the code that connects our database
// or will throw an error and exit the program.
const dbConnector = async () => {
  // using try lets us test the code block for errors
  // here we are then console logging the error with the attached message
  // that it would recieve. We use await to wait for the connection to our database being passed
  // in from above where we have set it to mongoURI
  //
  try {
    await mongoose.connect(database);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnector;
