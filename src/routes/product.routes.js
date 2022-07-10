const { Router } = require("express");
const CreateProductController = require("../controllers/product/CreateProductController");
const GetProductController = require("../controllers/product/GetProductController");
const UpdateProductController = require("../controllers/product/UpdateProductController");
const DeleteProductController = require("../controllers/product/DeleteProductController");

const productRouter = Router();

productRouter.post("/create", CreateProductController);
productRouter.get("/product", GetProductController);
productRouter.put("/product", UpdateProductController);
productRouter.delete("/product", DeleteProductController);

module.exports = productRouter;