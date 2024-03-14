const AppError = require("../utils/AppError");


class UsersControllers {
  create(req, res) {
    const { name, email } = req.body;

    if (!name) {
      throw new AppError("Nome é obrigatorio!!")
    }

    res.status(201).json({ name, email });
  }
}

module.exports = UsersControllers;
