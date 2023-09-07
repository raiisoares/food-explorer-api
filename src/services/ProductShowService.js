class ProductShowService {

    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(id) {
        const productToBeShown = await this.productsRepository.show(id);
        return productToBeShown;
    }

}

module.exports = ProductShowService;