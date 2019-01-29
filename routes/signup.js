var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
  var firstname = req.param('firstname'),
    lastname = req.param('lastname'),
    email = req.param('email'),
    password = req.param('password');

  if (!(firstname && lastname && email && password)) {
    res.send('FirstName, Lastname, Email or password should not be blank');
  }
  else if (password.length < 8) {
    res.send('Password should be atleast of 8 characters');
  }
  else {
    if (req.param('subscribe') === 'on') {
      res.send(`<h5>Hello ${firstname} ${lastname}. Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${email}</h5>`);
    }
    else {
      res.send(`<h5>Hello ${firstname} ${lastname}. Thank you for signing up. Your account is now created</h5>`);
    }
  }
  
});

module.exports = router;
