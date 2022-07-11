const { Router } = require("express");
const AddProductToCartController = require("../controllers/cart/AddProductToCartController");
const GetCartController = require("../controllers/cart/GetCartController");
const UpdateCartController = require("../controllers/cart/UpdateCartController");
const DeleteCartController = require("../controllers/cart/DeleteCartController");

const cartRouter = Router();

cartRouter.post("/", AddProductToCartController);
cartRouter.get("/:userId", GetCartController);
cartRouter.put("/:userId", UpdateCartController);
cartRouter.delete("/:userId", DeleteCartController);
