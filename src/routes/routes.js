const { Router } = require("express");

const router = Router();

router.use("/api/users", require("./user.routes"));

module.exports = router;
