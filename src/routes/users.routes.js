const { Router } = require('express');
const UsersControllers = require('../controllers/UsersControllers');

const userRoutes = Router();

const usersControllers = new UsersControllers();

userRoutes.post('/', usersControllers.create);

module.exports = userRoutes;
