const { Router } = require("express");
const AddProductToCartController = require("../controllers/cart/AddProductToCartController");

const cartRouter = Router();

cartRouter.post("/", AddProductToCartController);
