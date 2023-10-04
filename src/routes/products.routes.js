const { Router, request, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const ProductsController = require("../controllers/ProductsController");
const productsController = new ProductsController();
const ProductImageController = require("../controllers/ProductImageController");
const productImageController = new ProductImageController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const productsRouter = Router();
const upload = multer(uploadConfig.MULTER);

productsRouter.use(ensureAuthenticated);

productsRouter.post("/", productsController.create);
productsRouter.delete("/:id", productsController.delete);
productsRouter.put("/:id", productsController.update);
productsRouter.get("/:id", productsController.show);
productsRouter.get("/", productsController.index);
productsRouter.patch(
  "/:id/image",
  upload.single("image"),
  productImageController.update
);

module.exports = productsRouter;
