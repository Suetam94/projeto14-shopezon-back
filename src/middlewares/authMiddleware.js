const jwt = require("jsonwebtoken");
const User = require("../database/models/UserSchema");

const authHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401);
    throw new Error(
      "No token provided or are incorrect in headers authorization"
    );
  }

  const token = authorization.split("Bearer ")[1];

  const tokenPayload = jwt.verify(token, process.env.JWT_SECRET, "", "");

  if (!tokenPayload) {
    res.status(401);
    throw new Error("Not authorized");
  }

  req.user = await User.findById(tokenPayload.userId).select("-password");

  return next();
};

module.exports = authHandler;
