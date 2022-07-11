const { Router } = require("express");
const CreateProductController = require("../controllers/product/CreateProductController");
const GetProductController = require("../controllers/product/GetProductController");
const UpdateProductController = require("../controllers/product/UpdateProductController");
const DeleteProductController = require("../controllers/product/DeleteProductController");
const GetAllProductsController = require("../controllers/product/GetAllProductController");

const productRouter = Router();

productRouter.post("/create", CreateProductController);
productRouter.get("/all", GetAllProductsController);
productRouter.get("/product/:productId", GetProductController);
productRouter.put("/product/:productId", UpdateProductController);
productRouter.delete("/product/:productId", DeleteProductController);

module.exports = productRouter;
