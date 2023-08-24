const ProductDeleteService = require("./ProductDeleteService");
const ProductRepositoryInMemory = require("../repositories/ProductsRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("ProductDeleteService", () => {
    let productRepositoryInMemory = null;
    let productDeleteService = null;

    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        productDeleteService = new ProductDeleteService(productRepositoryInMemory);
    })

    it("product should be deleted", async () => {

        const id = 2;
        const productsList = await productDeleteService.execute(id);

        expect.extend({
            toContainObject(received, argument) {

                const pass = this.equals(received,
                    expect.arrayContaining([
                        expect.objectContaining(argument)
                    ])
                )

                if (pass) {
                    return {
                        message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
                        pass: true
                    }
                } else {
                    return {
                        message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
                        pass: false
                    }
                }
            }
        });

        expect(productsList).not.toContainObject({ id: 2 });

    });


    it("product should not be deleted", async () => {

        const id = -3;
        const productsList = await productDeleteService.execute(id);

        expect(productsList).toHaveLength(3);

    });

});
