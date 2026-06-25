const express = require('express');
const newMessageRouter = express.Router();

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Protect specific pages
newMessageRouter.get('/newMessage', checkAuthenticated, (req, res) => {
  res.render('newMessage');
});

module.exports = homeRouter;