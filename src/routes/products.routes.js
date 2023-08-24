const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const productsController = new ProductsController();
const productsRouter = Router();

productsRouter.post("/", productsController.create);
productsRouter.delete("/:id", productsController.delete);
productsRouter.put("/:id", productsController.update);

module.exports = productsRouter;