//this is our routes file for first names
// this is basically a tunnel connecting our model
//with our database and is being called by our firstNamesRouter
// in our expressServer file.

// here we are bringing in our express router to help us create routes
// we are also bringing in our first name model
const router = require('express').Router();
let FirstName = require('../models/firstName.model');

//The first ENDPOINT of our RESTful API is a get request which allows us to find all of
// our firstnames - it handles the http GET request from our front end

// the ('/') specifies our route to the front end
// we are then passing in request and response
// in order to pass information from the HTTP request and respond to our
//HTTP request
router.route('/').get((req, res) => {
  // we are calling find which is a mongoose method to find all the names in our database
  FirstName.find()
    //the find returns a promise set to json format
    .then(fname => res.json(fname))
    //the .catch is going to catch any error and responpond with the correct
    //error message
    .catch(error => res.status(400).json('ooops!: ' + error));
});

//The second endpoint of our RESTful API is our POST method which allows us to enter first names
// into our database - it handles the http POST request from our front end
// the ('/add') specifies our route to the front end
router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  // here we are connecting our new First name data entry to our model
  const newFirstName = new FirstName({ firstname });
  newFirstName
    // using the save() method to save our first names in the database
    .save()
    //then we are responding with a console log letting us know that our entry was a success
    .then(() => res.json('First Name ADDED!'))
    //should any errors occur we are catching them and responding with the appropriate error
    .catch(error => res.status(400).json('OOPS!' + error));
});

//Our third RESTful API endpoint is our delete route.
// We use the :id to communicate with mongo that
//we are wanting to get the unique _id that mongo attaches to every object in our database.
router.route('/:id').delete((req, res) => {
  FirstName.findByIdAndDelete(req.params.id)
    .then(() => res.json('First Name Deleted'))
    .catch(error => res.status(400).json('oops! ' + error));
});

//we export as router because we are using Router() from express
module.exports = router;
