class UsersControllers {
  create(req, res) {
    const { name, email } = req.body;
    res.status(201).json({ name, email });
  }
}

module.exports = UsersControllers;
