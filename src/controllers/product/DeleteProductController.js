const asyncHandler = require("express-async-handler");

const DeleteProductController = asyncHandler(async (req, res) => {
  const { id } = req;

  if (!id) {
    res.status(400);
    throw new Error("No Product found");
  }

  return res.status(200).json({ id }).send();
});

module.exports = DeleteProductController;