const knex = require("../database/knex");

class UserRepository {

    async findByEmail(email) {
        const [user] = await knex("users").where({ "email": email });
        return user;
    }

    async create({ name, email, password }) {
        const userId = await knex.insert({ name, email, password }).into("users");
        return { id: userId };
    }

}

module.exports = UserRepository;