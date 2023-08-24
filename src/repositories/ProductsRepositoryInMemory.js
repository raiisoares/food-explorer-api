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

    async delete(id) {

        const product01 = {
            id: Math.floor(Math.random() * 1000) + 1,
            name: "Prato 01",
            type: "Refeição",
            description: "Teste",
            price: 10.00,
            ingredients: ["teste1", "teste2"]
        };

        const product02 = {
            id: 2,
            name: "Prato 02",
            type: "Refeição",
            description: "Teste",
            price: 10.00,
            ingredients: ["teste1", "teste2"]
        };

        const product03 = {
            id: Math.floor(Math.random() * 1000) + 1,
            name: "Prato 03",
            type: "Refeição",
            description: "Teste",
            price: 10.00,
            ingredients: ["teste1", "teste2"]
        };

        this.products.push(product01);
        this.products.push(product02);
        this.products.push(product03);

        const filteredProducts = this.products.filter(product => (product.id !== id));

        return filteredProducts;
    }
}

module.exports = ProductsRepositoryInMemory;


