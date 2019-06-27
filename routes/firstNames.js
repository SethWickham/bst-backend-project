//this is our routes file for first names
// this is basically a tunnel connecting our model
//with our database and is being called by our firstNamesRouter
// in our expressServer file.

const router = require('express').Router();
let FirstName = require('../models/firstName.model');

//The first ENDPOINT of our RESTful API is a get request which allows us to find all of
// our firstnames - it handles the http GET request from our front end

// the ('/') specifies our route to the front end
// we are passing in request and response
// in order to pass information from the HTTP request and respond to our
//HTTP request
router.route('/').get((req, res) => {
  // we are calling the find which is a mongoose method to find all the names in our database
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
  // here we are connecting to our model in order to
  const newFirstName = new FirstName({ firstname });

  newFirstName
    // using the save() method to save our first names in the database
    .save()
    .then(() => res.json('First Name ADDED!'))
    .catch(error => res.status(400).json('OOPS!' + error));
});
//we export as router because we are using Router() from express
module.exports = router;
