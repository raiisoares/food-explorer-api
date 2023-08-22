const AppError = require("../utils/AppError");

class ProductsController {

    async create(request, response) {
        const { name, type, description, price, tags } = request.body;

        response.status(201).json({ name, type, description, price, tags });
    }

}

module.exports = ProductsController;