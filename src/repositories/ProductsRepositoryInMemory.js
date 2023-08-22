class ProductsRepositoryInMemory {
    products = [];

    async create({ name, type, description, price, ingredients }) {
        const product = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            type,
            description,
            price,
            ingredients
        };
    
        this.products.push(product);
    
        return product;
    }
}

module.exports = ProductsRepositoryInMemory;


