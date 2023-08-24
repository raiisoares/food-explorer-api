class ProductUpdatedService {

    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute({ id }, { name, type, description, price, ingredients }) {
        const productUpdated = await this.productsRepository.update({ id }, { name, type, description, price, ingredients });
        return productUpdated;
    }

}

module.exports = ProductUpdatedService;