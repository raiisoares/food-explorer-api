const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const productsController = new ProductsController();
const productsRouter = Router();

productsRouter.post("/", productsController.create);
productsRouter.delete("/:id", productsController.delete);

module.exports = productsRouter;