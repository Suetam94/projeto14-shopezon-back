const { Router } = require("express");
const CreateUserController = require("../controllers/user/CreateUserController");
const LoginUserController = require("../controllers/user/LoginUserController");
const GetUserController = require("../controllers/user/GetUserController");
const UpdateUserController = require("../controllers/user/UpdateUserController");
const DeleteUserController = require("../controllers/user/DeleteUserController");
const authHandler = require("../middlewares/authMiddleware");

const userRouter = Router();

userRouter.post("/create", CreateUserController);
userRouter.post("/login", LoginUserController);
userRouter.get("/me", authHandler, GetUserController);
userRouter.put("/me", authHandler, UpdateUserController);
userRouter.delete("/me", authHandler, DeleteUserController);

module.exports = userRouter;
