function renderSignUpGet(req, res) {
    res.render('signUp');
};

function signUpPost(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log(username, email, password);
    res.redirect('/');
};

module.exports = {
    renderSignUpGet,
    signUpPost
};