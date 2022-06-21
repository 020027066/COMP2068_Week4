var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Option 1 and the easiest
// router.get('/about', (req, res, next) => {
//   // tell express to render an hbs view template
//   // pass a JSON object to the view if you have more than one piece of info to pass to view
//   res.render('about', 
//   {
//     title: "About the Project",    
//     email : "contact@email.com"
//   });
// });




module.exports = router;
