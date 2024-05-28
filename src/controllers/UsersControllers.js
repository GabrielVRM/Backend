const { hash, compare } = require("bcryptjs");
const moment = require("moment");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersControllers {
  async create(req, res) {
    const { name, email, password } = req.body;

    if (name && email && password) {
      const database = await sqliteConnection();
      // ?, serve para inserir dados de uma variavel no banco de dados, com o veto [], dentro do vetor o que será substituido [email]
      const checkUserExists = await database.get(
        "SELECT * FROM users where email = (?)",
        [email]
      );

      if (checkUserExists) {
        throw new AppError("esse email já existe");
      }

      const hashedPassword = await hash(password, 8);

      await database.run(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ? )",
        [name, email, hashedPassword]
      );

      return res.status(201).json();
    } else throw new AppError("Requisição errada!");
  }

  // separar os updates
  async update(req, res) {
    const { name, email, password, old_password } = req.body;
    // const { id } = req.params;
    const user_id = req.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ]);
    console.log(user);
    if (!user) throw new AppError("Usúario não encontrado!");

    const userWithUpdateEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );
    if (userWithUpdateEmail && userWithUpdateEmail.id !== id)
      throw new AppError("Este email já está em uso!");

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) throw new AppError("Digite a senha antiga!");

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError(" A senha antiga não confere!");
      }

      user.password = await hash(password, 8);
    }
    await database.run(
      `
  UPDATE users 
  SET 
  name = ?,
  email = ?,
  password = ?,
  update_at = DATETIME('now')
  where id = ?
  `,
      [user.name, user.email, user.password, user_id]
    );

    return res.status(200).json();
  }
}

module.exports = UsersControllers;
