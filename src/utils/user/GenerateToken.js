const jwt = require("jsonwebtoken");

const generateUserToken = (userId, isAdmin) => {
  return jwt.sign(
    { userId, isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    },
    ""
  );
};

module.exports = generateUserToken;
