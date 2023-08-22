const knex = require("../database/knex");

class ProductsRepository {

    async create({ name, type, description, price, ingredients }) {

        const [product_id] = await knex("products").insert({
            name,
            type,
            description,
            price,
        });

        const ingredientsInsert = ingredients.map(name => {
            return {
                name,
                product_id
            }
        });
        
        await knex("ingredients").insert(ingredientsInsert);

    }

}

module.exports = ProductsRepository;