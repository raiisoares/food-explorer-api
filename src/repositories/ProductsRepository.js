const knex = require("../database/knex");
const AppError = require("../utils/AppError");

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


    async delete(id) {
        
        const [productToBeRemoved] = await knex("products").where({ id });
        if (!productToBeRemoved) throw new AppError("Produto não está cadastrado!");
        
        await knex("products").where({ id }).delete();
        return productToBeRemoved;
    }


}

module.exports = ProductsRepository;