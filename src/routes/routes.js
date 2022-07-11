const { Router } = require("express");

const router = Router();

router.use("/api/users", require("./user.routes"));
router.use("/api/products", require("./product.routes"));
router.use("/api/cart", require("./product.routes"));

module.exports = router;
