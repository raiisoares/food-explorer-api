class ProductDeleteService {

    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(id) {
        const productToBeRemoved = await this.productsRepository.delete(id);
        return productToBeRemoved;
    }

}

module.exports = ProductDeleteService;