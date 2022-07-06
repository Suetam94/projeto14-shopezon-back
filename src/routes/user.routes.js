const { Router } = require("express");
const CreateUserController = require("../controllers/user/CreateUserController");
const LoginUserController = require("../controllers/user/LoginUserController");
const GetUserController = require("../controllers/user/GetUserController");
const UpdateUserController = require("../controllers/user/UpdateUserController");
const DeleteUserController = require("../controllers/user/DeleteUserController");

const userRouter = Router();

userRouter.post("/create", CreateUserController);
userRouter.post("/login", LoginUserController);
userRouter.get("/me", GetUserController);
userRouter.put("/me", UpdateUserController);
userRouter.delete("/me", DeleteUserController);

module.exports = userRouter;
