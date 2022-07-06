const jwt = require("jsonwebtoken");

const generateUserToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    },
    ""
  );
};

module.exports = generateUserToken;
