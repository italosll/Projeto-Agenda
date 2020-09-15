const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');


// Rotas da home
route.get('/', HomeController.index);

// Rotas de login
route.get('/login/index', LoginController.index);
route.post('/login/register', LoginController.register);
route.post('/login/login', LoginController.login);
route.get('/login/logout', LoginController.logout);



module.exports = route;
