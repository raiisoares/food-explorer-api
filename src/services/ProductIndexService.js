class ProductIndexService {

    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(name) {
        const productsToBeShown = await this.productsRepository.index(name);
        return productsToBeShown;
    }

}

module.exports = ProductIndexService;