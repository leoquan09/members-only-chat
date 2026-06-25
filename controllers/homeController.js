function renderHome(req, res) {
    res.render('home');
    console.log('request made to home');
};

module.exports = { renderHome };