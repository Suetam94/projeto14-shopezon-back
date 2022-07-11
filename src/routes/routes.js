const { Router } = require("express");

const router = Router();

router.use("/api/users", require("./user.routes"));
router.use("/api/products", require("./product.routes"));

module.exports = router;
