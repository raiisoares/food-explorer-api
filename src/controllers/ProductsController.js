const ProductsRepository = require("../repositories/ProductsRepository");
const ProductCreateService = require("../services/ProductCreateService");
const ProductDeleteService = require("../services/ProductDeleteService");
const ProductUpdateService = require("../services/ProductUpdateService");
const ProductShowService = require("../services/ProductShowService");

class ProductsController {

    async create(request, response) {
        const { name, type, description, price, ingredients } = request.body;

        const productRepository = new ProductsRepository();
        const productCreateService = new ProductCreateService(productRepository);

        await productCreateService.execute({ name, type, description, price, ingredients });

        return response.status(200).json({ name, type, description, price, ingredients });
    }

    async delete(request, response) {

        const { id } = request.params;

        const productRepository = new ProductsRepository();
        const productDeleteService = new ProductDeleteService(productRepository);

        await productDeleteService.execute(id);

        return response.status(200).json();
    }


    async update(request, response) {

        const { name, type, description, price, ingredients } = request.body;
        const { id } = request.params;

        const productRepository = new ProductsRepository();
        const productUpdateService = new ProductUpdateService(productRepository);

        await productUpdateService.execute({ id }, { name, type, description, price, ingredients });

        return response.status(200).json("deu bom");

    }

    async show(request, response) {

        const { id } = request.params;
        const productRepository = new ProductsRepository();
        const productShowService = new ProductShowService(productRepository);

        const productToBeShown = await productShowService.execute(id);

        return response.status(200).json(productToBeShown);


    }

}

module.exports = ProductsController;