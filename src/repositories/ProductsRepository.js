const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class ProductsRepository {

    async findById({ id }) {
        const [product] = await knex("products").where({ id });
        return product;
    }

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

    async update({ id }, { name, type, description, price, ingredients }) {

        const [productToBeUpdated] = await knex("products").where({ id });
        if (!productToBeUpdated) throw new AppError("Produto não está cadastrado!");

        if (ingredients) {

            await knex("ingredients").where({ "product_id": id }).delete();

            const ingredientsInsert = ingredients.map(name => {
                return {
                    name,
                    product_id: id
                }
            });

            await knex("ingredients").insert(ingredientsInsert);
        }

        productToBeUpdated.name = name ?? productToBeUpdated.name;
        productToBeUpdated.type = type ?? productToBeUpdated.type;
        productToBeUpdated.description = description ?? productToBeUpdated.description;
        productToBeUpdated.price = price ?? productToBeUpdated.price;

        await knex("products").update({ name: productToBeUpdated.name, type: productToBeUpdated.type, description: productToBeUpdated.description, price: productToBeUpdated.price }).where({ id });

        return productToBeUpdated;
    }


}

module.exports = ProductsRepository;