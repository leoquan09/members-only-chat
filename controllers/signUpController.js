const db = require('../db/queries.js')

function renderSignUpGet(req, res) {
    res.render('signUp');
};

async function signUpPost(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if(!db.findUserByUsername(username)) {
        await db.addUser(username, email, password);
    };

    console.log(username, email, password);
    res.redirect('/');
};

module.exports = {
    renderSignUpGet,
    signUpPost
};