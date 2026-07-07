const { Router } = require('express');
const dashboardRouter = Router();
const checkAuth = require('../utility/checkAuth');
const dashboardController = require('../controllers/dashboardController.js');

dashboardRouter.get('/dashboard', checkAuth, dashboardController.renderDashBoard);

module.exports = dashboardRouter;