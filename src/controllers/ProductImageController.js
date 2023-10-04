const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiscStorage = require("../providers/discStorage");

class ProductImageController {
  async update(request, response) {
    const { id } = request.params
    const imageFileName = request.file.filename;

    const discStorage = new DiscStorage();
    const [product] = await knex("products").where({ id });

    if (!product) throw new AppError("Produto não Existe.", 401);
    if (product.image) await discStorage.deleteFile(product.image);

    const filename = await discStorage.saveFile(imageFileName);
    product.image = filename;

    const [updatedProduct] = await knex("products")
      .update({ image: product.image })
      .where({ id })
      .returning("*");

    return response.status(200).json(updatedProduct);
  }
}

module.exports = ProductImageController;
