const passport = require('passport');

function checkAuth(req, res, next) {
    const loggedIn = req.isAuthenticated;
    if (loggedIn) {
        res.status(202);
        return next();
    };
    res.status(400).redirect('/logIn');
};

module.exports = checkAuth;