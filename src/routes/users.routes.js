const { Router } = require("express");
const UsersControllers = require("../controllers/UsersControllers");

const userRoutes = Router();

//middleware é uma função
// function myMiddleware(req, res, next) {
//   console.log('voce passou pelo middleware');
//   if (!req.body.isAdmin) res.json({ message: 'user unautrorized' });
//   next();
// }

const usersControllers = new UsersControllers();

userRoutes.post("/", usersControllers.create);
userRoutes.put("/:id", usersControllers.update);

module.exports = userRoutes;
