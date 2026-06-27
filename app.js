require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const homeRouter = require('./routers/homeRouter');
const signUpRouter = require('./routers/sign-up');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'catInTheRiceHat',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(homeRouter);
app.use(signUpRouter);

app.listen(process.env.PORT, () => console.log('hello world!'));