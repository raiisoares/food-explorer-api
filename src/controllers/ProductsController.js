const ProductsRepository = require("../repositories/ProductsRepository");
const ProductCreateService = require("../services/ProductCreateService");

class ProductsController {

    async create(request, response) {
        const { name, type, description, price, ingredients } = request.body;
        const productRepository = new ProductsRepository();
        const productCreateService = new ProductCreateService(productRepository);
        await productCreateService.execute({ name, type, description, price, ingredients });

        response.status(201).json({ name, type, description, price, ingredients });
    }

}

module.exports = ProductsController;