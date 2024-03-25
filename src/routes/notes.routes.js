const { Router } = require("express");
const NotesController = require("../controllers/NotesControllers");

const notesRoutes = Router();

// //midldleware é uma função
// function myMiddleware(req, res, next) {
//   console.log("voce passou pelo middleware");
//   if (!req.body.isAdmin) res.json({ message: "user unautrorized" });
//   next();
// }

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.get("/", notesController.index);
notesRoutes.delete("/:id", notesController.Delete);



module.exports = notesRoutes;
