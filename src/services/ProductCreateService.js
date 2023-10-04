class ProductCreateService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ name, type, description, price, ingredients }) {
    const productCreated = await this.productsRepository.create({
      name,
      type,
      description,
      price,
      ingredients,
    });
    return productCreated;
  }
}

module.exports = ProductCreateService;
