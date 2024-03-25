const { Router } = require("express");
const TagsControllers = require("../controllers/TagsControllers");

const tagsRouter = Router();

//middleware é uma função
// function myMiddleware(req, res, next) {
//   console.log('voce passou pelo middleware');
//   if (!req.body.isAdmin) res.json({ message: 'user unautrorized' });
//   next();
// }

const tagsController = new TagsControllers();

tagsRouter.get("/:user_id", tagsController.show);

module.exports = tagsRouter;
