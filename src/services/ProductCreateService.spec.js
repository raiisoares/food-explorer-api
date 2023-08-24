const ProductCreateService = require("./ProductCreateService");
const ProductRepositoryInMemory = require("../repositories/ProductsRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("ProductCreateService", () => {
    let productRepositoryInMemory = null;
    let productCreateService = null;

    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        productCreateService = new ProductCreateService(productRepositoryInMemory);
    })

    it("product should be create", async () => {
        const product = {
            id: Math.floor(Math.random() * 1000) + 1,
            name: "Salada",
            type: "Refeição",
            description: "Salada Top",
            price: 12.45,
            ingredients: ["tag01", "tag02"]
        }

        const productCreated = await productCreateService.execute(product);

        expect(productCreated).toHaveProperty("id");
    });

})
