const jwt = require("jsonwebtoken");
const User = require("../database/models/UserSchema");

const authHandler = async (req, res, next) => {
  const { authorization } = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401);
    throw new Error(
      "No token provided or are incorrect in headers authorization"
    );
  }

  const token = authorization.split("Bearer ")[1];

  const userId = jwt.verify(token, process.env.JWT_SECRET, "", "");

  if (!userId) {
    res.status(401);
    throw new Error("Not authorized");
  }

  req.user = await User.findById(userId).select("-password");

  return next();
};

module.exports = authHandler;
