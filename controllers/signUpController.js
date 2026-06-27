const db = require('../db/queries.js')

function renderSignUpGet(req, res) {
    res.render('signUp');
};

async function signUpPost(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await db.findUserByUsername(username);

    if (!existingUser) {
        await db.addUser(username, email, password);
    } else {
        console.log("User already exists!");
    }

    console.log(username, email, password);
    res.redirect('/');
};

module.exports = {
    renderSignUpGet,
    signUpPost
};