const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class SessionRepository {
  async create({ email, password }) {

    const [user] = await knex("users").where({ email: email });

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    delete user.password;

    return user;
  }
}

module.exports = SessionRepository;