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
  firstName: {
    // these are validations the "definition" and "limits" of our field
    type: String,
    trim: true,
    unique: true,
    minlength: 2,
    required: true
  }
});

//here we are creating and attaching FirstName to our mongoose model
// and passing these values into our mongoose model and then exporting it
const FirstName = mongoose.model('FirstName', firstNameSchema);

// we export files so that they can be used across our project
// this is important to help divide our code into smaller more managable portions
module.exports = FirstName;
