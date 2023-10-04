const knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersValidatedController {
  async index(request, response) {
    const { user } = request;

    const [checkUserExists] = await knex("users").where({ id: user.id });

    if (!checkUserExists) {
      throw new AppError("Unauthorized", 401);
    }

    return response.status(200).json();
  }
}

module.exports = UsersValidatedController;
