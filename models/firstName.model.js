//bringing in mongoose
const mongoose = require('mongoose');
//we are creating a mongoose Schema which is basically outlining how our
// data is going to look that we are going to be passing through to our database.
// We are basically placing definition and limits to our data
// for organizational and efficiency purposes. Because data can be so
// varied its helpful to create "definitions" to better contain our data
const Schema = mongoose.Schema;

const firstNameSchema = new Schema({
  // our field is firstName
  firstname: {
    // these are validations
    //they set definition and limits to of our field
    type: String, //only takes in letters
    trim: true, //removes any accidental white spaces added
    unique: true,
    //sparse:true, //makes sure that there are no duplicate names
    minlength: 2, //sets the minimum requirement for the length of String
    required: true //tells us that the value will be required and cannot be left blank
  }
});

//here we are creating and attaching FirstName to our mongoose model
// and passing these values into our mongoose model.
// this is going to be how we connect to our Schema.
const FirstName = mongoose.model('fname', firstNameSchema);

// we export files so that they can be used across our project
// this is important to help divide our code into smaller more managable portions
module.exports = FirstName;
