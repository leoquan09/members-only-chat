const express = require('express');
const newMessageRouter = express.Router();

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

newMessageRouter.get('/newMessage', checkAuthenticated, (req, res) => {
  res.render('newMessage');
});

newMessageRouter.post('/newMessage', checkAuthenticated, (req, res) => {
  const name = req.user.username;
  const message = req.body.message;
  console.log(name, message);
  res.redirect('/dashboard');
});

module.exports = newMessageRouter;