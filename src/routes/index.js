const { Router } = require("express");
const routes = Router();
const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");

routes.use("/users", usersRouter);
routes.use("/products", productsRouter);

module.exports = routes;