// Option 2) create its own router js file
// Import express anbd create arouter object
const express = require('express');
const router = express.Router();

// configure routes
// router are already registered to specific route
// intention is to registrer this object to '/about' in the app.js file

// GET to /About/
router.get('/', (req, res, next) => {
  // tell express to render an hbs view template
  // pass a JSON object to the view if you have more than one piece of info to pass to view
  res.render('about', 
  {
    title: "About the Project",    
    email : "contact@email.com"
  });
});

// export the router object
module.exports = router;