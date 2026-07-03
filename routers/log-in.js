const { Router } = require('express');
const logInRouter = Router();
const logInController = require('../controllers/logInController');

logInRouter.get('/logIn', logInController.renderLogIn);

logInRouter.post('/logIn', logInController.postLogIn);

module.exports = logInRouter;